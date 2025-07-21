import {Sidebar} from "/src/components/Sidebar.jsx";
import { Navbar } from '/src/components/Navbar.jsx';
import "./Settings.css";
import { PasswordPopup } from "./components/PasswordPopup.jsx";

const Settings = () => {
    return (
        <div className='SettingsContainer'>
        <Sidebar />
        <div className="mainContent">
        <Navbar  navTitle="Settings" navText="Manage all settings" />
        <PasswordPopup />
            




        </div>
        </div>
    );
};

export default Settings;