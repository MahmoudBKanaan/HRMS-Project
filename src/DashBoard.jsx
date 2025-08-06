import {Sidebar} from "/src/components/Sidebar"
import { Navbar } from '/src/components/Navbar';
import { ProfileSection } from "/src/components/ProfileSection";
import { StatsContainer } from "/src/components/StatsContainer"
import {PersonalDetails} from "/src/components/PersonalDetails"
import "./DashBoard.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "/src/AuthContext";



const Dashboard = () => {

  const {isAdmin, accounts} = useContext(AuthContext);



  return (

    <div className="dashboardContainer">
      <Sidebar  />
        <div className="mainContent">
        <Navbar  navTitle="Dashboard" navText={`Welcome Back ${isAdmin? 
        `${accounts?.admin?.firstName} ${accounts?.admin?.middleName} ${accounts?.admin?.lastName}`: 
        `${accounts?.user?.firstName} ${accounts?.user?.middleName} ${accounts?.user?.lastName}`
          } `} />     
        < ProfileSection  />
        < StatsContainer/>
        <PersonalDetails />
        </div>
    </div>
  
  );
}
  

export default Dashboard;
