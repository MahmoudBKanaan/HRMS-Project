import {Sidebar} from "/src/components/Sidebar.jsx"
import { Navbar } from '/src/components/Navbar';

const Payroll = () => {
    return (
        <div className='AttendanceContainer'>
        <Sidebar />
        <div className="mainContent">
        <Navbar  navTitle="Payroll" navText="View Payroll Details" />
            




        </div>
        </div>
    );
};

export default Payroll;