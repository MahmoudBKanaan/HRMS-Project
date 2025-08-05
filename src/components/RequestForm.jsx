import { useContext, useEffect, useState } from "react";
import "./RequestForm.css";
import { AuthContext } from "./AuthContext";
import "./PayrollForm.css";
import TextareaAutosize from 'react-textarea-autosize';

        
    
const RequestForm = ({ entry, currentUsers, localUserIndex,setRequestInfoPage,approveRequest,rejectRequest}) => {

    const {departments} = useContext(AuthContext);
    const [entryRow, setEntryRow] = useState(null)
    const [user, setUser] = useState() 

    useEffect(() => {
        setEntryRow(entry[localUserIndex])
    },[])

    useEffect(() => {
        if(entryRow) {
            currentUsers.map((user) => {
                if (user.name === entryRow[0]) {
                    setUser(user)
                }
            })
        }

    },[entryRow])


    if(!user) {return}
        return (
        <div onClick={(e) => { if (e.target.classList.contains("payrollFormOverlay")) { setRequestInfoPage(false) } }} className='payrollFormOverlay'>

        <div className="payroll-container">

        <h1 className="title">Request Information</h1>

        <div className="payrollFormSection">
            <h2></h2>
            <div className="form-grid">
            <div className="form-group">
                <label>Employee Name</label>
                <input value={user.name} readOnly />
            </div>
            <div className="form-group">
                <label>Role</label>
                <input value={user.role} readOnly />
            </div>
            <div className="form-group">
                <label>Department</label>
                <input value={user.department + " Department"} readOnly />
            </div>
            <div className="form-group">
                <label>Request ID</label>
                <input value={entryRow[1]} readOnly />
            </div>
            <div className="form-group">
                <label>Request Type</label>
                <input value={entryRow[2]} readOnly />
            </div>
            <div className="form-group">
                <label>Request Status</label>
                <input value={entryRow[7]} readOnly />
            </div>
            <div className="form-group">
                <label>Date</label>
                <input value={entryRow[3]} readOnly />
            </div>
            <div className="form-group">
                <label>Active at</label>
                <input value={entryRow[4]} readOnly />
            </div>
            <div className="form-group">
                <label>Ends at</label>
                <input value={entryRow[5]} readOnly />
            </div>
            </div>
        </div>
{/* ----------------------------------------------------- */}
<div className="form-grid">
            <div className="form-group full-width">
            <label>Reason</label>
            <TextareaAutosize 
            minRows={3}
            maxRows={10}
            value={entryRow[6]} 
            readOnly />
            </div>
</div>
{/* ----------------------------------------------------- */}
        <div className="buttonWrapper"> 
            <button 
            onClick={() => rejectRequest()} 
            className="blueButton btn">Reject
            </button> 
            <button 
            onClick={() => approveRequest()} 
            className="redButton btn">Approve
            </button>
        </div>

        </div>
        </div>
  );
    };


export default RequestForm;