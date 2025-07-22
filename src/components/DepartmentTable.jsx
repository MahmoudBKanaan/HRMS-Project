import { useState, useEffect, useContext } from "react";
import "./DepartmentTable.css"
import { AuthContext } from "../AuthContext.jsx";
import DisableAccountPopup from "./DisableAccountPopup.jsx";
import ActivateAccountPopup from "./ActivateAccountPopup.jsx";
import { Departments } from "../../Constants/Data.js";







const DepartmentTable = ({ department, users }) => {

  
  const [menuIndex, setMenuIndex] = useState(null);
  const [disableAccountPopup, setDisableAccountPopup] = useState(false);
  const [activateAccountPopup, setActivateAccountPopup] = useState(false);
  
  const {setAddUser, setCurrentDepartment, setUserIndex, userIndex,
    setEditingPage, setViewDetailsPage, setCurrentUser,
    currentUser, currentDepartment} = useContext(AuthContext);





useEffect(() => {
  setUserIndex(menuIndex)
  if(menuIndex !== null) {
      setTimeout(() => {
      setMenuIndex(null);
      }, 10000);}},[menuIndex])

const DropdownMenu = ({ visible }) => {
return (
  <div className={`actionDropdown ${visible ? "show" : ""}`}>
    <div onClick={() => handleViewDetailButton()} >View Details</div>
    <div onClick={() => handleEditButton()} >Edit</div>
    <div onClick={() => handleDisableAccountButton()} >Disable Account</div>
    <div onClick={() => handleActivateAccountButton()} >Activate Account</div>
  </div>
);
};

    const handleViewDetailButton  = () => {
      setCurrentDepartment(department);
      setCurrentUser(() => Departments[department][userIndex])
      setViewDetailsPage(true);
    }
    const handleEditButton = () => {
        setCurrentDepartment(department);
        setEditingPage(true);
    }
    const handleActivateAccountButton = () => {
        setActivateAccountPopup(true);
    }
    const handleDisableAccountButton = () => {
        setDisableAccountPopup(true);
    }




  const handleAddUserButton = () => {
  setAddUser(true);
  setCurrentDepartment(department);
}




    return (
      <>
    <div className="department">
    <button onClick={() => handleAddUserButton()} className="add-user">Add User</button>
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
              <td>{user.firstName} {user.middleName} {user.lastName}</td>
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