import { ProfileSection } from "/src/components/ProfileSection";
import { StatsContainer } from "/src/components/StatsContainer"
import {PersonalDetails} from "/src/components/PersonalDetails"
import { useContext } from "react";
import { AuthContext } from "/src/AuthContext";
import "/src/DashBoard.css";
import "/src/components/ProfileSection.css";
import "/src/components/PersonalDetails.css";
import "/src/components/StatsContainer.css";
import { FaUsers, FaCheckCircle, FaMoneyBillWave } from 'react-icons/fa';
import { useState } from "react";
import { Departments } from "../../Constants/Data";


const UserDetails = () => {
    
    const {currentUser,setViewDetailsPage,currentDepartment, setEditingPage, userIndex, setUserIndex} = useContext(AuthContext);
    const [tempIndex, setTempIndex] = useState(userIndex)
    const user = Departments[currentDepartment][tempIndex]
    console.log(user)
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
        
        const handleListButton = () => {
            setViewDetailsPage(false)
        }
        
        const handleEdit = () => {
            setUserIndex(tempIndex);
            setEditingPage(true);
            setViewDetailsPage(false);
        }


  return (

    <>
         <div className="profileSection">
            <img src={user.profileImage} alt="Profile" className="profileImg" />
             
              <div className="profileInfo">
                <div className='ProfileUpperSection' > 
                  <div className='NameRoleWrapper' >
                  <h2 className='EmployeeName' >
                    {user.firstName} {user.middleName} {user.lastName}
                    </h2>
                  <p className='EmployeeRole'>
                    {user.role}
                  </p>
                  </div>
                  <div className='ButtonsWrapper' >
                  <button className="checkInBtn" onClick={() => handleListButton()} >Employee list</button>
                  <button className="checkOutBtn" onClick={() => handleEdit()}>Edit Details</button>
                  </div>
                </div>
                <div className='ProfileLowerSection'  >
                  
                    <div className='LowerSectionColumn' >
                    <div className='LowerSectionTitle'>Email:
                    <div className='LowerSectionText'> 
                    {user.email}
                    </div></div>
                    <div className='LowerSectionTitle'>Hire Date:
                    <div className='LowerSectionText'>
                    {user.hireDate}
                    </div></div></div>

                    <div className='LowerSectionColumn'>
                    <div className='LowerSectionTitle'>Phone:
                    <div className='LowerSectionText'>
                    {user.phone}
                    </div> </div>
                    <div className='LowerSectionTitle'> Employee ID:
                    <div className='LowerSectionText'>
                    {user.id}
                    </div></div></div>

                </div>
              </div>

          </div>

            <div className="statsContainer">
            <StatsCard icon={<FaUsers />} label="Department" value= {user.department} />
            <StatsCard icon={<FaMoneyBillWave />} label="Payroll" value={`$${user.payroll.netPay}`}  />
            <StatsCard icon={<FaCheckCircle />} label="Attendance" value={user.attendance} />
            </div>
            <section className="PersonalDetailsSection" >
                <h2 className='PersonalDetailsTitle'>Personal Details</h2>
                <div className="detailsGrid">

                <div className="DetailsGridItem" > Address:
                <div className="DetailsGridValue" >{user.address}
                </div></div>
                
                <div className="DetailsGridItem">Date of Birth:
                <div className="DetailsGridValue"> {user.dateOfBirth}
                </div> </div>
                
                <div className="DetailsGridItem">Gender:
                <div className="DetailsGridValue" > {user.gender}
                </div></div>
                
                </div>
            </section>

    </>
  
  );
}
  

export default UserDetails;
