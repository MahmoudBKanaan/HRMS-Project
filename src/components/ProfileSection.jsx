import { useContext, useState } from "react";
import "./ProfileSection.css";
import "/src/index.css";
import { AuthContext } from "../AuthContext";



export const ProfileSection = () => {


  const {isAdmin, departments, accounts} = useContext(AuthContext);
  const [checkinTime, setCheckinTime] = useState(null);
  const [checkoutTime, setCheckoutTime] = useState(null);
  const [hasCheckedin, setHasCheckedin] = useState(false);
  const [checkMessage, setCheckMessage] = useState("");
  


  const handleCheckin = () => {
     const timeNow = new Date().toLocaleString(
      "en-US" , {
        day: "2-digit",
        month: "long" ,
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hours12: true
      }
     );
     setCheckinTime(timeNow);
     setHasCheckedin(true);
     setCheckMessage("You're now checked in.")
     setTimeout( () => {
     setCheckMessage("");
     }, 5000 )
   }

   const handleCheckout = () => {
     const timeNow = new Date().toLocaleString(
      "en-US" , {
        day: "2-digit",
        month: "long" ,
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hours12: true
      }
     );
     setCheckinTime(timeNow);
     setHasCheckedin(false);
     setCheckMessage("You're now checked out.")
     setTimeout( () => {
     setCheckMessage("");
     }, 5000 )
  }
   

    return (
          <div className="profileSection">
            <img src={isAdmin?accounts.admin.ProfileImage:accounts.user.ProfileImage } alt="Profile" className="profileImg" />
             
              <div className="profileInfo">
                <div className='ProfileUpperSection' > 
                  <div className='NameRoleWrapper' >
                  <h2 className='EmployeeName' >
                    {isAdmin?
                    `${accounts.admin.firstName} ${accounts.admin.middleName} ${accounts.admin.lastName}`:
                    `${accounts.user.firstName} ${accounts.user.middleName} ${accounts.user.lastName}`}
                    </h2>
                  <p className='EmployeeRole'>
                    {isAdmin?
                    `${accounts.admin.role}`:
                    `${accounts.user.role}`}
                  </p>
                  </div>
                  <div className='ButtonsWrapper' >
                  <button className="checkInBtn" onClick={() => handleCheckin()} >Check-In</button>
                  <button className="checkOutBtn" onClick={() => handleCheckout()}>Check-Out</button>
                  </div>
                </div>
                <div className='ProfileLowerSection'  >
                  
                    <div className='LowerSectionColumn' >
                    <div className='LowerSectionTitle'>Email:
                    <div className='LowerSectionText'> 
                    {isAdmin?
                    `${accounts.admin.email}`:
                    `${accounts.user.email}`}
                    </div>
                    </div>
                    <div className='LowerSectionTitle'>Hire Date:
                    <div className='LowerSectionText'>
                    {isAdmin?
                    `${accounts.admin.hireDate}`:
                    `${accounts.user.hireDate}`}
                    </div>
                    </div>
                    </div>

                    <div className='LowerSectionColumn'>
                    <div className='LowerSectionTitle'>Phone:
                    <div className='LowerSectionText'>
                    {isAdmin?
                    `${accounts.admin.phone}`:
                    `${accounts.user.phone}`}
                    </div>
                    </div>
                    <div className='LowerSectionTitle'> Employee ID:
                    <div className='LowerSectionText'>
                               {isAdmin?
                    `${accounts.admin.id}`:
                    `${accounts.user.id}`}
                    </div>
                    </div>
                    </div>

                </div>
              </div>

              {checkMessage &&(
                <div className={`generalMessage  ${ hasCheckedin === false? "redBackground" : ""} `}>
                  <div>
                  {checkMessage} 
                  </div>
                  {hasCheckedin? "Check in time:" : "Check out time:"}
                  <div>
                    {checkinTime}
                  </div>
                  <div>
                  </div>
                </div>
              )}

          </div>
    );
};