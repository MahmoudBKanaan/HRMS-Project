import { FaUsers, FaCheckCircle, FaMoneyBillWave } from 'react-icons/fa';
import "./StatsContainer.css"
import { useContext } from 'react';
import { AuthContext } from '../src/AuthContext';
import { admin, user } from "../Constants/Data";






const StatsCard = ({ icon, label, value, sub }) => (

  <div className="statsCard">
    <div className="iconWrapper" >
      <div className='cardIcon'>
      {icon}
      </div>
      {value}
    </div>
    <div className='cardLabel' >
      <p>{label}      {sub && <span className='subText'>    {sub}</span>}</p>
    </div>
  </div>
);

export const StatsContainer = () => {

  const {isAdmin} = useContext(AuthContext);
    return (
          <div className="statsContainer">
          <StatsCard icon={<FaUsers />} label="Department" value= {isAdmin?
                              `${admin.department}`:
                              `${user.department}`} />
          <StatsCard icon={<FaMoneyBillWave />} label="Payroll" value={isAdmin?
                              `${admin.salary}`:
                              `${user.salary}`}  />
          <StatsCard icon={<FaCheckCircle />} label="Attendance" value={isAdmin?
                              `${admin.attendanceRate}`:
                              `${user.attendanceRate}`} />
          </div>
    );
};