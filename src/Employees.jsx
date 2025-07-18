import "./Employees.css";
import {Sidebar} from "/components/Sidebar.jsx"
import { Navbar } from '../components/Navbar';
import { Departments } from "../Constants/departments";
import { useEffect, useState } from "react";
import AddUser from "../components/AddUser";
import DepartmentTable from "../components/DepartmentTable";

const [addUser, setAddUser] = useState(false)
const [currentdepartment, setCurrentDepartment] = useState(null);

const [popupWindow, setPopupWindow]               = useState(false);
const [viewDetail, setViewDetail]                 = useState(false);
const [editingPage, setEditingPage]               = useState(false);
const [disableAccountPage, setDisableAccountPage] = useState(false);
const [downloadResume, setDownloadResume]         = useState(false);

export const handleAddUserButton = (department) => {
    setAddUser(true);
    setCurrentDepartment(department);
}






const Employees = () => {


    return (

        <div className='EmployeesContainer'>
        <Sidebar />
        <div className="mainContent">
        <Navbar  navTitle="Employee Management" navText="View Employees Infromation" />

        { addUser?
        < AddUser  />:
        <div className="container">
        {Object.entries(Departments).map(([dept, users]) => (
        <DepartmentTable key={dept} department={dept} users={users} />
        ))}
        </div>



        }








        </div>
        </div>
    );
};

export default Employees;
