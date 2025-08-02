import {Sidebar} from "/src/components/Sidebar.jsx";
import { Navbar } from '/src/components/Navbar';
import { FaUsers, FaCheckCircle, FaExclamationCircle ,FaRegClock  } from 'react-icons/fa';
import { StatsCard } from "./Attendance";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import Table from "./components/Table.jsx";
import { useEffect } from "react";
import Popup from "./components/Popup.jsx";
import RequestForm from "./components/RequestForm.jsx";
import NewRequest from "./components/NewRequest.jsx";
import "./Requests.css";




const Requests = () => {

    const {departments, userIndex, setDepartments} = useContext(AuthContext);
    
    const [newRequest, setNewRequest] = useState(false)
    const [approvePopup, setApprovePopup] = useState(false)
    const [rejectPopup, setRejectPopup] = useState(false)
    const [requestInfoPage, setRequestInfoPage] = useState(false)
    
    const [entry, setEntry] = useState(null)
    const [currentDepartment, setCurrentDepartment] = useState(null)
    const [currentUsers, setCurrentUsers] = useState(null)
    const [localUserIndex, setLocalUserIndex] = useState(null)

    const [pending, setPending] = useState(0)
    const [approved, setApproved] = useState(0)
    const [rejected, setRejected] = useState(0)
    const [allRequests, setAllRequests] = useState(0)




    useEffect(() => {
        if(userIndex!== null)
        setLocalUserIndex(userIndex)
    },[userIndex])

    useEffect(() => {
            let pending = 0;
            let approved = 0;
            let rejected = 0;
            let allRequests = 0;
        {Object.entries(departments).map(([dept, users]) => {
            users.map((user, index) => {
                if (user.requests) {
                    user.requests.map((req) => {
                        allRequests = allRequests+1;
                        if (req.status === "Approved") {
                            approved=approved+1
                        } else if (req.status === "Pending") {
                            pending=pending+1
                        } else if (req.status === "Rejected") {
                            rejected=rejected+1
                        }
                    })
                }
            })
            setPending(pending)
            setApproved(approved)
            setRejected(rejected)
            setAllRequests(allRequests)
        })}
        
    },[departments])

 
    const approveRequest = () => {

        if (entry === null || currentDepartment === null || currentUsers === null || localUserIndex === null) {return}
        const entryRow = entry[localUserIndex]


        let updatedusers = [...currentUsers]
        updatedusers = updatedusers.map((user) => {
            if(user.name === entryRow[0]) {
                const updatedRequests = user.requests.map((req) => {
                    if(req.requestId === entryRow[1]) {
                        return {
                            ...req,
                            status: "Approved"
                        }
                    }
                    return req 
                })
                return {
                    ...user,
                    requests: updatedRequests
                }
            } else {return user}
        })

  
      setDepartments(prev => ({
        ...prev, [currentDepartment]: updatedusers
      }))


        setApprovePopup(false)
        setRequestInfoPage(false)
    }

    const rejectRequest = () => { 
        if (entry === null || currentDepartment === null || currentUsers === null || localUserIndex === null) {return}
        const entryRow = entry[localUserIndex]


        let updatedusers = [...currentUsers]
        updatedusers = updatedusers.map((user) => {
            if(user.name === entryRow[0]) {
                const updatedRequests = user.requests.map((req) => {
                    if(req.requestId === entryRow[1]) {
                        return {
                            ...req,
                            status: "Rejected"
                        }
                    }
                    return req 
                })
                return {
                    ...user,
                    requests: updatedRequests
                }
            } else {return user}
        })

  
      setDepartments(prev => ({
        ...prev, [currentDepartment]: updatedusers
      }))

        setRejectPopup(false)
                setRequestInfoPage(false)
    }

    return (
        <div className='RequestsContainer'>
        <Sidebar />
        <div className="mainContent">
        <Navbar  navTitle="Requests" navText="Manage Requests" />
            
        <div className="cardsContainer">
        <StatsCard icon={<FaRegClock />}            label="Pending"         value= {pending}    />
        <StatsCard icon={<FaCheckCircle />}         label="Approved"        value= {approved}   />
        <StatsCard icon={<FaExclamationCircle  />}  label="Rejected"        value= {rejected}   />
        <StatsCard icon={<FaUsers />}               label="All Requests"    value= {allRequests}/>
        </div>


        <div className="RequestsTablesContainer">


        {Object.entries(departments).map(([dept, users]) => {
            let entry = []
            users.map((user) => {
                    if (user.requests) {
                        user.requests.map((req) => {
                             if (req.requestType !== "resignation") {
                                entry = [...entry ,
                                    [user.name,
                                        req.requestId || "none",
                                        req.requestType || "none",
                                        req.startDate || "none",
                                        req.startDate || "none",
                                        req.endDate || "none",
                                        req.reason || "none",
                                        req.status || "none",
                                    ]
                                ]
                            } else if (req.requestType === "resignation") {
                                entry = [...entry ,
                                    [user.name,
                                        req.requestId || "none",
                                        req.requestType || "none",
                                        req.startDate || "none",
                                         "N/A",
                                         "N/A",
                                        req.reason || "none",
                                        req.status || "none",
                                    ]
                                ]

                            }
                            
                        })
                    }
                }
                
            ) 
        
            return (
                <Table 
                 buttonTitle="New Request"
                 buttonFunction = {() => {  setCurrentDepartment(dept);
                                            setCurrentUsers(users);
                                            setNewRequest(true); 
                 }}
                key={dept}
                tableTitle={dept} 
                headerList={["Name", "Request ID", "Request Type","Date", "Active At" , "Ends At", "Reason","Status", "Actions"]} 
                rowList={ entry
                } 
                optionsList={["View Details", "Approve", "Reject",]} 
                optionsListFunctions={[
                    () => { 
                            setLocalUserIndex(userIndex);
                            setEntry(entry);
                            setCurrentDepartment(dept);
                            setCurrentUsers(users);
                            setRequestInfoPage(true);
                    },
                    () => {
                            setLocalUserIndex(userIndex);
                            setEntry(entry);
                            setCurrentDepartment(dept);
                            setCurrentUsers(users);
                            setApprovePopup(true);
                     },
                    () => {
                            setLocalUserIndex(userIndex);
                            setEntry(entry);
                            setCurrentDepartment(dept);
                            setCurrentUsers(users);
                            setRejectPopup(true);
                    },
                ]}   
                />
            )  

        })}
        

        </div>


        { approvePopup === true &&
            <Popup
            title="Approve Request"
            message="Are you sure you want to approve the request?"
            confirmationFunction={() => approveRequest()}
            cancellationFunction={() => setApprovePopup(false)}
            />
        }
        { rejectPopup === true &&
            <Popup
            title="Reject Request"
            message="Are you sure you want to reject the request?"
            confirmationFunction={() => rejectRequest()}
            cancellationFunction={() => setRejectPopup(false)}
            />
        } 

        {requestInfoPage
        && entry !== null 
        && currentDepartment !== null
        && currentUsers !== null 
        && localUserIndex !== null &&
        <RequestForm  
            entry={entry}
            currentDepartment={currentDepartment}
            currentUsers={currentUsers}
            localUserIndex={localUserIndex}
            setRequestInfoPage={setRequestInfoPage}
            approveRequest={approveRequest}
            rejectRequest={rejectRequest}
         />
        }
        
        {newRequest
        && currentDepartment !== null
        && currentUsers !== null  &&
        <NewRequest  
            currentDepartment={currentDepartment}
            currentUsers={currentUsers}
            setNewRequest={setNewRequest}
         />
        }







        </div>
        </div>
    );
};

export default Requests;