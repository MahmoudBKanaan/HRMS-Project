import {Sidebar} from "/components/Sidebar"
import { Navbar } from '/components/Navbar';
import { ProfileSection } from "/components/ProfileSection";
import { StatsContainer } from "/components/StatsContainer"
import {PersonalDetails} from "/components/PersonalDetails"
import "./DashBoard.css";
import { admin, user } from "../Constants/Data";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";


const Dashboard = () => {

  const {isAdmin} = useContext(AuthContext);

  return (

    <div className="dashboardContainer">
      <Sidebar  />
        <div className="mainContent">
        <Navbar  navTitle="Dashboard" navText={`Welcome Back ${isAdmin? 
        `${admin.firstName} ${admin.middleName} ${admin.lastName}`: 
        `${user.firstName} ${user.middleName} ${user.lastName}`
          } `} />     
        < ProfileSection  />
        < StatsContainer/>
        <PersonalDetails address="28th St, Dammam KSA" />
        </div>
    </div>
  
  );
}
  

export default Dashboard;
