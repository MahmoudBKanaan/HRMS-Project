import { useState, useEffect, useContext } from "react";
import "./DepartmentTable.css"
import { AuthContext } from "../AuthContext.jsx";
import Popup from "./Popup.jsx";







const DepartmentTable = ({ department, users }) => {

  
  const [menuIndex, setMenuIndex] = useState(null);
  const [disableAccountPopup, setDisableAccountPopup] = useState(false);
  const [activateAccountPopup, setActivateAccountPopup] = useState(false);
  const [isMobile, SetIsMobile] = useState(false);
  
  const {setAddUser, setCurrentDepartment, setUserIndex,
          userIndex, setEditingPage, setViewDetailsPage,
          setCurrentUser, departments,setDepartments,} = useContext(AuthContext);





useEffect(() => {
  if(menuIndex !== null && menuIndex !== undefined) {
      setTimeout(() => {
      setMenuIndex(null);
      }, 10000);}},[menuIndex])



const DropdownMenu = ({ visible }) => {
return (
  <div className={`actionDropdown ${visible ? "show" : ""}`}>
    <div onClick={() => {
      handleViewDetailButton();
      setUserIndex(menuIndex);
    }
    } >View Details</div>
    <div onClick={() => {
      setUserIndex(menuIndex);
      handleEditButton();
    }
    } >Edit</div>
    <div onClick={() => {
      setUserIndex(menuIndex);
      setDisableAccountPopup(true);
    }
    } >Disable Account</div>
    <div onClick={() => {
      setUserIndex(menuIndex);
      setActivateAccountPopup(true);
    }
    } >Activate Account</div>
  </div>
);
};

    const handleViewDetailButton  = () => {
      if (userIndex !== null && userIndex !== undefined) {
        setCurrentDepartment(department);
        setCurrentUser(() => departments[department][userIndex])
        setViewDetailsPage(true);
      } else {
        handleViewDetailButton()
      }
    }
    const handleEditButton = () => {
            if (userIndex !== null && userIndex !== undefined) {
              setCurrentDepartment(department);
              setEditingPage(true);

      } else {
        handleViewDetailButton()
      }
    }

    const handleAddUserButton = () => {
      setCurrentDepartment(department);
      setAddUser(true);
    }
 
    const confirmDisableAccount = () => {
      const updatedusers = [...users]
      updatedusers[menuIndex] = {
        ...updatedusers[menuIndex],
        status: "Disabled"
      };
      setDepartments(prev => ({
        ...prev, [department]: updatedusers
      }))
      setPopup(false)
    }

    const confirmActivateAccount = () => {
      const updatedusers = [...users]
        updatedusers[menuIndex] = {
          ...updatedusers[menuIndex],
          status: "Active"
        };
      setDepartments(prev => ({
        ...prev, [department]: updatedusers
      }))
      setActivateAccountPopup(false)
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
                     { disableAccountPopup === true && userIndex !== null && userIndex !== undefined &&
                     <Popup 
                     title="Disable Account" 
                     message="Are you sure you want to disable the account?"
                     confirmationFunction={() => confirmDisableAccount()} 
                     cancellationFunction={() => setDisableAccountPopup(false)}
                     />}
                     { activateAccountPopup === true && userIndex !== null && userIndex !== undefined &&
                     <Popup 
                     title="Acivate Account" 
                     message="Are you sure you want to activate the account?"
                     confirmationFunction={() => confirmActivateAccount()} 
                     cancellationFunction={() => setActivateAccountPopup(false)}
                     />}
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