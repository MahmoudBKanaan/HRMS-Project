import { FaUsers, FaCheckCircle, FaMoneyBillWave } from 'react-icons/fa';
import "./StatsContainer.css"
import { useContext } from 'react';
import { AuthContext } from '/src/AuthContext';






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

  const {isAdmin, accounts} = useContext(AuthContext);
    return (
          <div className="statsContainer">
          <StatsCard icon={<FaUsers />} label="Department" value= {isAdmin?
                              `${accounts?.admin?.department}`:
                              `${accounts?.user?.department}`} />
          <StatsCard icon={<FaMoneyBillWave />} label="Payroll" value={isAdmin?
                              `$${accounts?.admin?.payroll?.netPay}`:
                              `${accounts?.user?.payroll?.netPay}`}  />
          <StatsCard icon={<FaCheckCircle />} label="Attendance" value={isAdmin?
                              `${accounts?.admin?.attendance}`:
                              `${accounts?.user?.attendance}`} />
          </div>
    );
};