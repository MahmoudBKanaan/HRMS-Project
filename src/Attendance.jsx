import {Sidebar} from "/src/components/Sidebar.jsx";
import { Navbar } from '/src/components/Navbar';
import { FaUsers, FaCheckCircle, FaMoneyBillWave,FaRegClock  } from 'react-icons/fa';
import { useContext , useEffect, useState} from 'react';
import { AuthContext } from '/src/AuthContext';
import "/src/components/StatsContainer.css"
import "./attendance.css"


export const StatsCard = ({ icon, label, value, sub }) => (

  <div className="cardContainer">
    <div className="iconWrapper2" >
      <div className='cardIcon2'>
      {icon}
      </div>
      {value}
    </div>
    <div className='cardLabel2' >
      <p>{label}      {sub && <span className='subText'>    {sub}</span>}</p>
    </div>
  </div> 
);






const Attendance = () => {
    
    const {isAdmin, accounts, departments} = useContext(AuthContext);

    const [presentEmployees, setPresentEmployees]   = useState();
    const [averageAttendance, setAverageAttendance] = useState();
    const [absentEmployees, setAbsentEmployees]     = useState();
    const [totalPayroll, setTotalPayroll]           = useState();


    useEffect(() => {
      if(!departments) return
      
      const countPresent = Object.values(departments).flat().filter(user => user.checkedin !== null && user.checkedout === null ).length;
      setPresentEmployees(countPresent)
      
      const countAbsent = Object.values(departments).flat().filter(user => user.checkedin === null || user.checkedout !== null ).length;
      setAbsentEmployees(countAbsent)
      
      let countTotalPayroll = 0;
      let sumAttendance = 0;
      Object.entries(departments).forEach(([dept, users]) => {
        users.forEach((user) => {
              countTotalPayroll = countTotalPayroll+
              Number(user.payroll.baseSalary)+
              Number(user.payroll.housingBenefits)+
              Number(user.payroll.transportationBenefits)+
              Number(user.payroll.foodBenefits)+
              Number(user.payroll.commissions)-
              Number(user.payroll.deductions);
              sumAttendance = sumAttendance+parseFloat( user.attendance.replace("%", ""))
            }
          )
        }
      )
      let averageAttendance = Number((sumAttendance/(countPresent+countAbsent)).toFixed(2));
      setAverageAttendance(averageAttendance)
      countTotalPayroll = countTotalPayroll.toLocaleString();
      setTotalPayroll(countTotalPayroll)
    },[departments])
  
    const getAverageAttendance = () => {
        return `${averageAttendance}%`
    }
    const getPresentEmployees = () => {
        return `${presentEmployees}`
    }
    const getAbsentEmployees = () => {
        return `${absentEmployees}`
    }
    const getTotalPayroll = () => {
        return `$${totalPayroll}`
    }




    return (
        <div className='AttendanceContainer'>
        <Sidebar />
        <div className="mainContent">
        <Navbar  navTitle="Attendance" navText="Attendance Records" />

        <div className="cardsContainer">
        <StatsCard icon={<FaUsers />}           label="Avg Attendance"  value= {getAverageAttendance()} />
        <StatsCard icon={<FaCheckCircle />}     label="Present"         value= {getPresentEmployees()} />
        <StatsCard icon={<FaRegClock />}        label="Absent"          value= {getAbsentEmployees()} />
        <StatsCard icon={<FaMoneyBillWave />}   label="Total Payroll"         value= {getTotalPayroll()}  />
        </div>

      <div className="tablesSection">


      <section className="tableSection" >
        <div className="tableSectionTitle">Present Employees</div>
        <table className="attendanceTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Department</th>
              <th>Attendance</th>
              <th>Checked-In</th>
              <th>Checked-Out</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(departments).map(([dept, users]) => (
                users.filter(user => user.checkedin !== null  && user.checkedout === null).map(user => (
                    <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>{user.department}</td>
                    <td>{user.attendance}</td>
                    <td>{user.checkedin || 'Never'}</td>
                    <td>{user.checkedout || 'Never'}</td>
                    </tr>
                    )
                  )
                )
              )
            }
          </tbody>
        </table>
      </section>
      
      <section className="tableSection" >
        <div className="tableSectionTitle">Absent Employees</div>
        <table className="attendanceTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Department</th>
              <th>Attendance</th>
              <th>Checked-In</th>
              <th>Checked-Out</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(departments).map(([dept, users]) => (
                users.filter(user => user.checkedin === null || user.checkedout !== null  ).map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>{user.department}</td>
                    <td>{user.attendance}</td>
                    <td>{user.checkedin || 'Never'}</td>
                    <td>{user.checkedout || 'Never'}</td>
                    </tr>
                    ))))}
          </tbody>
        </table>
      </section>
            </div>
        </div>
        </div>
    );
};

export default Attendance;