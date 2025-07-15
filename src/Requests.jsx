import {Sidebar} from "/components/Sidebar.jsx"
import { Navbar } from '../components/Navbar';

const Requests = () => {
    return (
        <div className='AttendanceContainer'>
        <Sidebar />
        <div className="mainContent">
        <Navbar  navTitle="Requests" navText="Manage Requests" />
            




        </div>
        </div>
    );
};

export default Requests;