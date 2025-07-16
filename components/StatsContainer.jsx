import { FaUsers, FaCheckCircle, FaMoneyBillWave } from 'react-icons/fa';
import "./StatsContainer.css"

export const StatsContainer = () => {


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

    return (
          <div className="statsContainer">
          <StatsCard icon={<FaUsers />} label="Department" value="IT" />
          <StatsCard icon={<FaMoneyBillWave />} label="Payroll" value="$500,000" />
          <StatsCard icon={<FaCheckCircle />} label="Attendance" value="96%" />
          </div>
    );
};