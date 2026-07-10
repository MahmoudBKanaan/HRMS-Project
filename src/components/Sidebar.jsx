import { FaHome, FaUser, FaCheckCircle, FaMoneyBillWave, FaFileAlt } from 'react-icons/fa';
import { useLocation , Link} from "react-router-dom";
import { MdRequestPage } from 'react-icons/md';
import "./Sidebar.css";
import { FiSettings } from 'react-icons/fi';
import { useContext } from 'react';
import { AuthContext } from '/src/AuthContext';
import defaultImage from "/src/assets/logoWhite.png";

const AdminList = ({ pathname }) => {
return (
    <div className="navListGroup">
    <nav>
    <ul className="navList">
    <li ><Link 
    className={`navItem ${pathname === "/dashboard" ? "active" : ""}`} 
    to="/dashboard" ><FaHome /> DashBoard </Link></li>
    <li ><Link 
      className={`navItem ${pathname === "/employees" ? "active" : ""}`} 
      to="/employees" ><FaUser /> Employees </Link></li>
    <li ><Link 
      className={`navItem ${pathname === "/attendance" ? "active" : ""}`} 
      to="/attendance" ><FaCheckCircle /> Attendance</Link></li>
    <li ><Link 
      className={`navItem ${pathname === "/payroll" ? "active" : ""}`} 
      to="/payroll" ><FaMoneyBillWave /> Payroll </Link></li>
    <li ><Link 
       className={`navItem ${pathname === "/documents" ? "active" : ""}`} 
       to="/documents" ><FaFileAlt /> Documents</Link></li>
    <li ><Link 
       className={`navItem ${pathname === "/requests" ? "active" : ""}`} 
       to="/requests" > <MdRequestPage /> Requests</Link></li>
    <li ><Link 
       className={`navItem ${pathname === "/settings" ? "active" : ""}`} 
       to="/settings" ><FiSettings /> Settings</Link></li>
    </ul>
    </nav>
    </div>
)}

const UserList = ({ pathname }) => {
  return (
    <div className="navListGroup">
    <nav>
    <ul className="navList">
    <li ><Link 
    className={`navItem ${pathname === "/dashboard" ? "active" : ""}`} 
    to="/dashboard" ><FaHome /> DashBoard </Link></li>
    <li ><Link 
       className={`navItem ${pathname === "/requests" ? "active" : ""}`} 
       to="/requests" > <MdRequestPage /> Requests</Link></li>
    <li ><Link 
       className={`navItem ${pathname === "/settings" ? "active" : ""}`} 
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
      <AdminList pathname={location.pathname} /> :
      < UserList pathname={location.pathname} />
      }
    </aside>
  )};
