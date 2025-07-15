import "./Employees.css";
import {Sidebar} from "/components/Sidebar.jsx"
import { Navbar } from '../components/Navbar';


const Employees = () => {

    return (

        <div className='EmployeesContainer'>
        <Sidebar />
        <div className="mainContent">
        <Navbar  navTitle="Employee Management" navText="View Employees Infromation" />
            




        </div>
        </div>

    );
};

export default Employees;
