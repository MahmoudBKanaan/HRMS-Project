import { useState, useEffect, useContext } from "react";
import "./DepartmentTable.css"
import { AuthContext } from "../AuthContext.jsx";
import DisableAccountPopup from "./DisableAccountPopup.jsx";
import ActivateAccountPopup from "./ActivateAccountPopup.jsx";







const DepartmentTable = ({ department, users }) => {

const [menuIndex, setMenuIndex] = useState(null);
const [disableAccountPopup, setDisableAccountPopup] = useState(false);
const [activateAccountPopup, setActivateAccountPopup] = useState(false);

const [currentdepartment, setCurrentDepartment]   = useState(null);
const [viewDetail, setViewDetail]                 = useState(false);
const [editingPage, setEditingPage]               = useState(false);
const [downloadResume, setDownloadResume]         = useState(false);

const {addUser, setAddUser} = useContext(AuthContext);


useEffect(() => {
  if(menuIndex !== null) {
      setTimeout(() => {
      setMenuIndex(null);
      }, 5000);}},[menuIndex])

const DropdownMenu = ({ visible }) => {
return (
  <div className={`actionDropdown ${visible ? "show" : ""}`}>
    <div onClick={() => handleViewDetailButton()} >View Details</div>
    <div onClick={() => handleEditButton()} >Edit</div>
    <div onClick={() => handleDisableAccountButton()} >Disable Account</div>
    <div onClick={() => handleActivateAccountButton()} >Activate Account</div>
    <div onClick={() => handleDownloadResumeButton()} >Download Resume</div>
  </div>
);
};


    const handleViewDetailButton  = () => {
        setViewDetail(true);
    }
    const handleEditButton = () => {
        setEditingPage(true);
    }
    const handleActivateAccountButton = () => {
        setActivateAccountPopup(true);
    }
    const handleDisableAccountButton = () => {
        setDisableAccountPopup(true);
    }
    const handleDownloadResumeButton = () => {
        setDownloadResume(true);
    }




  const handleAddUserButton = (dept) => {
  setAddUser(true);
  setCurrentDepartment(dept);
}







    return (
      <>
    <div className="department">
    <button onClick={() => handleAddUserButton(department)} className="add-user">Add User</button>
      <h2>{department}</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Attendance</th>
            <th>Documents</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>{user.attendance}</td>
              <td>{user.documents.join(", ")}</td>
              <td>
                <div className="action-container">
                  <div onClick={() => setMenuIndex(idx)}>
                    <div className="menu-icon">☰</div>
                    {menuIndex === idx && <DropdownMenu visible={true} />}
                  </div>
                    {disableAccountPopup === true && < DisableAccountPopup
                     department={department} 
                     setDisableAccountPopup={setDisableAccountPopup} 
                     menuIndex={menuIndex} 
                     users={users}/>}
                    {activateAccountPopup === true && < ActivateAccountPopup
                     department={department} 
                     setActivateAccountPopup={setActivateAccountPopup} 
                     menuIndex={menuIndex} 
                     users={users}/>}
                </div>
              </td>
            </tr>
            ))}

        </tbody>
      </table>
    </div>

    </>
  );
};  

export default DepartmentTable;