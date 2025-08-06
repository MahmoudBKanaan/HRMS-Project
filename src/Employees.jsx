import {Sidebar} from "/src/components/Sidebar.jsx"
import { Navbar } from '/src/components/Navbar';
import { useContext, useState } from "react";
import AddUser from "./components/AddUser";
import DepartmentTable from "./components/DepartmentTable";
import { AuthContext } from "/src/AuthContext";
import EditingPage from "./components/EditingPage";
import UserDetails from "./components/userDetails";
import "./Employees.css";





const Employees = () => {
  


  const {addUser, setAddUser, departments, editingPage, viewDetailsPage} = useContext(AuthContext);
  
    
  return (
    
    <div className='EmployeesContainer'>
        <Sidebar />
        <div className="mainContent">
        <Navbar  navTitle="Employee Management" navText="View Employees Infromation" />
        { addUser === true &&   < AddUser  />    }
        { editingPage === true && < EditingPage />}
        { viewDetailsPage === true &&  < UserDetails/>}

        { !addUser && !editingPage && !viewDetailsPage &&
        <div className="container"> 
        {Object.entries(departments).map(([dept, users]) => (
          <DepartmentTable key={dept} department={dept} users={users} />
        ))}
        
        </div>
      }










        </div>
        </div>
    );
  };
  
  export default Employees;
  