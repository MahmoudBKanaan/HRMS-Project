import { FaHome, FaUser, FaCheckCircle, FaMoneyBillWave, FaFileAlt } from 'react-icons/fa';
import { useLocation , Link} from "react-router-dom";
import { MdRequestPage } from 'react-icons/md';
import "./Sidebar.css";
import { FiSettings } from 'react-icons/fi';
import { useContext } from 'react';
import { AuthContext } from '/src/AuthContext';
import defaultImage from "/assets/logoWhite.png";

const AdminList = () => {
return (
    <div className="navListGroup">
    <nav>
    <ul className="navList">
    <li ><Link 
    className={`navItem ${location.pathname === "/dashboard" ? "active" : ""}`} 
    to="/dashboard" ><FaHome /> DashBoard </Link></li>
    <li ><Link 
      className={`navItem ${location.pathname === "/employees" ? "active" : ""}`} 
      to="/employees" ><FaUser /> Employees </Link></li>
    <li ><Link 
      className={`navItem ${location.pathname === "/attendance" ? "active" : ""}`} 
      to="/attendance" ><FaCheckCircle /> Attendance</Link></li>
    <li ><Link 
      className={`navItem ${location.pathname === "/payroll" ? "active" : ""}`} 
      to="/payroll" ><FaMoneyBillWave /> Payroll </Link></li>
    <li ><Link 
       className={`navItem ${location.pathname === "/documents" ? "active" : ""}`} 
       to="/documents" ><FaFileAlt /> Documents</Link></li>
    <li ><Link 
       className={`navItem ${location.pathname === "/requests" ? "active" : ""}`} 
       to="/requests" > <MdRequestPage /> Requests</Link></li>
    <li ><Link 
       className={`navItem ${location.pathname === "/settings" ? "active" : ""}`} 
       to="/settings" ><FiSettings /> Settings</Link></li>
    </ul>
    </nav>
    </div>
)}

const UserList = () => {
  return (
    <div className="navListGroup">
    <nav>
    <ul className="navList">
    <li ><Link 
    className={`navItem ${location.pathname === "/dashboard" ? "active" : ""}`} 
    to="/dashboard" ><FaHome /> DashBoard </Link></li>
    <li ><Link 
       className={`navItem ${location.pathname === "/requests" ? "active" : ""}`} 
       to="/requests" > <MdRequestPage /> Requests</Link></li>
    <li ><Link 
       className={`navItem ${location.pathname === "/settings" ? "active" : ""}`} 
       to="/settings" ><FiSettings /> Settings</Link></li>
    </ul>
    </nav>
    </div>
  )};



export const Sidebar = () => {

  const location = useLocation();
  const {isAdmin} = useContext(AuthContext);

  return (
    <aside className="side-bar">
      <img src={defaultImage} className='mainLogo' />
      {isAdmin?
      <AdminList /> :
      < UserList  />
      }
    </aside>
  )};