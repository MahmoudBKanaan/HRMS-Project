import {Sidebar} from "/components/Sidebar"
import { Navbar } from '/components/Navbar';
import { ProfileSection } from "/components/ProfileSection";
import { StatsContainer } from "/components/StatsContainer"
import {PersonalDetails} from "/components/PersonalDetails"
import "./DashBoard.css";


const Dashboard = () => {

  return (

    <div className="dashboardContainer">
      <Sidebar />
        <div className="mainContent">
        <Navbar  navTitle="Dashboard" navText="Welcome Back Neo Arel" />     
        < ProfileSection  />
        < StatsContainer/>
        <PersonalDetails />
        </div>
    </div>
  
  );
}
  

export default Dashboard;
