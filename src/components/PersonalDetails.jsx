import { useContext } from "react";
import "./PersonalDetails.css";
import { AuthContext } from "/src/AuthContext";




export const PersonalDetails = () => {

  const {isAdmin, accounts} = useContext(AuthContext);
  
  return (
    
    <section className="PersonalDetailsSection" >
    <h2 className='PersonalDetailsTitle'>Personal Details</h2>
    <div className="detailsGrid">

    <div className="DetailsGridItem" > Address:
    <div className="DetailsGridValue" >{isAdmin?
                    `${accounts?.admin?.address}`:
                    `${accounts?.user?.address}`}
    </div>
    </div>
    
    <div className="DetailsGridItem">Date of Birth:
    <div className="DetailsGridValue"> {isAdmin?
                    `${accounts?.admin?.dateOfBirth}`:
                    `${accounts?.user?.dateOfBirth}`}
    </div>
    </div>
    
    <div className="DetailsGridItem">Gender:
    <div className="DetailsGridValue" > {isAdmin?
                    `${accounts?.admin?.gender}`:
                    `${accounts?.user?.gender}`}
    </div>
    </div>
    
    </div>
    </section>
  )

}
