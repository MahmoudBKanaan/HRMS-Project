import {Sidebar} from "/components/Sidebar.jsx";
import { Navbar } from '../components/Navbar';
import "./Settings.css";

const Settings = () => {
    return (
        <div className='SettingsContainer'>
        <Sidebar />
        <div className="mainContent">
        <Navbar  navTitle="Settings" navText="Manage all settings" />
            




        </div>
        </div>
    );
};

export default Settings;