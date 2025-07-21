import {Sidebar} from "/src/components/Sidebar.jsx";
import { Navbar } from '/src/components/Navbar';
import "./attendance.css"

const Attendance = () => {


    return (
        <div className='AttendanceContainer'>
        <Sidebar />
        <div className="mainContent">
        <Navbar  navTitle="Attendance" navText="Attendance Records" />
            




        </div>
        </div>
    );
};

export default Attendance;