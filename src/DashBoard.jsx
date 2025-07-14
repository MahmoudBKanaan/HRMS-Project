import { FaHome, FaUser, FaCheckCircle, FaMoneyBillWave, FaFileAlt } from 'react-icons/fa';
import { MdRequestPage } from 'react-icons/md';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import  {useLocation, Link} from "react-router-dom"
import "./DashBoard.css";


export const Sidebar = () => {

  const location = useLocation();
  console.log(location.pathname);

  return (
    <aside className="side-bar">
    <div className="logo">HRMS</div>
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
       className={`navItem ${location.pathname === "/requests" ? "active" : ""}`} 
       to="/requests" > <MdRequestPage /> Requests</Link></li>
    <li ><Link 
      className={`navItem ${location.pathname === "/payroll" ? "active" : ""}`} 
      to="/payroll" ><FaMoneyBillWave /> Payroll </Link></li>
    <li ><Link 
       className={`navItem ${location.pathname === "/documents" ? "active" : ""}`} 
       to="/documents" ><FaFileAlt /> Documents</Link></li>
    </ul>
    </nav>
    </div>
    </aside>
  )};


const Navbar = () => (
  <header className="navbar">
    <div>
      <h1>DashBoard</h1>
      <p>Welcome back, Neo Arel.</p>
    </div>
    <div className="userMenu">
      <img src="/profile.jpg" alt="Profile" className="avatar" />
      <div className="dropdown">
        <ul className="dropdownList">
          <li><FiSettings /> Settings</li>
          <li><FiLogOut /> Log out</li>
        </ul>
      </div>
    </div>
  </header>
);

const StatsCard = ({ icon, label, value, sub }) => (
  <div className="statsCard">
    <div className="iconWrapper" >{icon}</div>
    <div>
      <h2>{value}</h2>
      <p>{label} {sub && <span>{sub}</span>}</p>
    </div>
  </div>
);

const PersonalDetails = () => (
  <section>
    <h2 style={{ marginTop: '20px' }}>Personal Details</h2>
    <div className="detailsGrid">
      <div><strong>Address</strong><span> 28th St, Dammam KSA</span></div>
      <div><strong>Date of Birth</strong><span> Jan 26, 1996</span></div>
      <div><strong>Gender</strong><span> Male</span></div>
    </div>
  </section>
);

const Dashboard = () => {




  return (

    <div className="dashboardContainer">
      <Sidebar />
        <div className="mainContent">
        <Navbar />
          <div className="profileSection">
          <img src="/profile.jpg" alt="Neo Arel" className="profileImg" />
          <div className="profileInfo">
          <h2>Neo Arel</h2>
          <p>Software Engineer</p>
          <div>
          <p><strong>Email:</strong> Neo7368@gmail.com</p>
          <p><strong>Phone:</strong> 057 63 66 939</p>
          <p><strong>Hire Date:</strong> March 22, 2025</p>
          <p><strong>Employee ID:</strong> 224867</p>
          </div>
          <div>
          <button className="checkInBtn">Check-In</button>
          <button className="checkOutBtn">Check-Out</button>
          </div>
          </div>
          </div>
          <div className="statsContainer">
          <StatsCard icon={<FaUser />} label="Department" value="IT" />
          <StatsCard icon={<FaMoneyBillWave />} label="Payroll" value="$500,000" />
          <StatsCard icon={<FaCheckCircle />} label="Attendance" value="96%" sub="4.2 ★★★★☆" />
          </div>
        <PersonalDetails />
        </div>
    </div>
  
  );
}
  

export default Dashboard;
