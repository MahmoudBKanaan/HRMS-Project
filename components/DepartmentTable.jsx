import { useState, useEffect } from "react";
import "./DepartmentTable.css"
import { handleAddUserButton } from "../src/Employees";








const DepartmentTable = ({ department, users }) => {

const [menuIndex, setMenuIndex] = useState(null);

    useEffect(() => {
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
    const handleDisableAccountButton = () => {
        setDisableAccountPage(true);
    }
    const handleDownloadResumeButton = () => {
        setDownloadResume(true);
    }


  const handleAddUserButton2 = () => {
    handleAddUserButton();
  }







    return (
    <div className="department">
    <button onClick={(department) => handleAddUserButton2(department)} className="add-user">Add User</button>
      <h2>{department}</h2>
      <table>
        <thead>
          <tr>
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
                </div>
              </td>
            </tr>
            ))}

        </tbody>
      </table>
    </div>
  );
};  

export default DepartmentTable;