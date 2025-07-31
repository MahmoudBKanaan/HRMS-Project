import {Sidebar} from "/src/components/Sidebar.jsx";
import { Navbar } from '/src/components/Navbar';
import "./Documents.css";
import Table from "./components/Table";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import jsPDF from "jspdf";
import UploadDocumentPopup from "./components/UploadDocumentPopup";

const Documents = () => {


    const {departments, userIndex, setDepartments, setUserIndex} = useContext(AuthContext);
    const [download, setDownload] = useState(false)
    const [uploadDocumentPopup, setUploadDocumentPopup] = useState(false)
    const [localDept, setLocalDept] = useState(null)
    const [localUsers, setLocalUsers] = useState(null)



    const downloadDocumentDetails = ({users, entry}) => {
    
        let user = {}

        if (userIndex !== null && userIndex !== undefined) {
            user = users[userIndex];
        } else {downloadDocumentDetails()}

        const entryRow = entry[userIndex]

        const doc = new jsPDF();

        const fullName = `${user.firstName} ${user.middleName} ${user.lastName}`;

        let y = 20;

        doc.setFontSize(22);
        doc.setFont("helvetica", "bold");
        doc.text("Document Details", 105, y, null, null, "center");

        y += 10;
        doc.setFontSize(14);
        doc.text("Employee Information", 14, y);

        y += 8;
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text("Employee Name:", 14, y);
        doc.setFont("helvetica", "normal");
        doc.text(fullName, 60, y);

        y += 7;
        doc.setFont("helvetica", "bold");
        doc.text("Role:", 14, y);
        doc.setFont("helvetica", "normal");
        doc.text(user.role, 60, y);

        y += 7;
        doc.setFont("helvetica", "bold");
        doc.text("Department:", 14, y);
        doc.setFont("helvetica", "normal");
        doc.text(`${user.department} Department`, 60, y);

        y += 7;
        doc.setFont("helvetica", "bold");
        doc.text("Employee ID:", 14, y);
        doc.setFont("helvetica", "normal");
        doc.text(user.id.toString(), 60, y);

        y += 7;
        doc.setFont("helvetica", "bold");
        doc.text("Employment Status:", 14, y);
        doc.setFont("helvetica", "normal");
        doc.text(user.status, 60, y);

        y += 7;
        doc.setFont("helvetica", "bold");
        doc.text("Hire Date:", 14, y);
        doc.setFont("helvetica", "normal");
        doc.text(user.hireDate, 60, y);

        y += 12;
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("Document Information", 14, y);

        doc.setFontSize(12);
        const payrollFields = [
            ["Document Title",  entryRow[1]],
            ["Document Size",   entryRow[2]],
            ["Upload Date",     entryRow[3]],
            ["Document Type",   entryRow[4]],
        ];

        y += 8;
        payrollFields.forEach(([label, value]) => {
            doc.setFont("helvetica", "bold");
            doc.text(`${label}:`, 14, y);
            doc.setFont("helvetica", "normal");
            doc.text(`${value}`, 60, y);
            y += 7;
        });


        doc.save(`${fullName.replace(/ /g, "_")}${user.documentsDetails.title}_.pdf`);   
    }

    const deleteDocument = ({users, entry, dept}) => {
        if (userIndex === null || userIndex === undefined) { deleteDocument();}
        const entryRow = entry[userIndex]
        let user = {};
        let localUserIndex = 0;
        users.map((userX, idx) => {
            if (userX.name === entryRow[0]) {
                user = userX
                localUserIndex = idx;
            }
        })
        const newDocuments = user.documents.filter(item => item !== entryRow[1])  
        const newDocumentsDetails = user.documentsDetails.filter(item => item.title !== entryRow[1])

        const updatedusers = [...users]
        updatedusers[localUserIndex] = {...updatedusers[localUserIndex], documents: newDocuments };
        updatedusers[localUserIndex] = {...updatedusers[localUserIndex], documentsDetails: newDocumentsDetails };
        
        setDepartments(prev => ({
        ...prev, [dept]: updatedusers
        }))
    }


    return (
        <div className='DocumentsContainer'>
        <Sidebar />
        <div className="mainContent">
        <Navbar  navTitle="Documents" navText="Manage Documents" />
        <div className="documentsTablesContainer"> 
            
        {Object.entries(departments).map(([dept, users]) => {

            let entry = []
            users.map((user) => {
                    if (user.documents) {
                        user.documentsDetails.map((doc) => {
                            entry = [...entry ,
                                [user.name,
                                    doc.title || "none",
                                    doc.size || "none",
                                    doc.uploadedAt || "none",
                                    doc.type || "none"
                                ]
                            ]
                            
                        })
                    }
            }) 
            return (
                <Table 
                 buttonTitle="Upload Document"
                 buttonFunction = {() => {setUploadDocumentPopup(true);
                                            setLocalDept(dept);
                                            setLocalUsers(users);
                                        }}
                key={dept}
                tableTitle={dept} 
                headerList={["Employees Name", "Document Title", "Size", "Uploaded", "Type", "Actions"]} 
                rowList={ entry
                } 
                optionsList={["Download","Delete"]} 
                optionsListFunctions={[
                    () => {downloadDocumentDetails({users, entry})},
                    () => {deleteDocument({users, entry, dept})},
                
                ]}   
                />
            )  
        })}
        { uploadDocumentPopup && localDept !== null && localUsers !== null &&
        < UploadDocumentPopup setUploadDocumentPopup={setUploadDocumentPopup} dept={localDept} users={localUsers} />
        }


        </div>




        </div>
        </div>
    );
};

export default Documents;