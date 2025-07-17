import { useContext } from "react";
import "./PersonalDetails.css";
import { AuthContext } from "../src/AuthContext";
import { admin, user } from "../Constants/Data";



export const PersonalDetails = () => {

  const {isAdmin} = useContext(AuthContext);
  
  return (
    
    <section className="PersonalDetailsSection" >
    <h2 className='PersonalDetailsTitle'>Personal Details</h2>
    <div className="detailsGrid">

    <div className="DetailsGridItem" >
    <p >Address:</p>
    <div className="DetailsGridValue" >{isAdmin?
                    `${admin.address}`:
                    `${user.address}`}</div>
    </div>
    
    <div className="DetailsGridItem">
    <p >Date of Birth:</p>
    <div className="DetailsGridValue"> {isAdmin?
                    `${admin.dateOfBirth}`:
                    `${user.dateOfBirth}`}
                    </div>
    </div>
    
    <div className="DetailsGridItem">
    <p >Gender:</p>
    <div className="DetailsGridValue" > {isAdmin?
                    `${admin.gender}`:
                    `${user.gender}`}</div>
    </div>
    
    </div>
    </section>
  )

}
