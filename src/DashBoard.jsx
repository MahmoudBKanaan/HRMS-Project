import { FaUser, FaCheckCircle, FaMoneyBillWave } from 'react-icons/fa';

import {Sidebar} from "/components/Sidebar.jsx"
import "./DashBoard.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';


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
        <Navbar  navTitle="Dashboard" navText="Welcome Back Neo Arel" />
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
