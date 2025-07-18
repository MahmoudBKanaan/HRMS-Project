
import { useContext, useState } from "react";
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import "./Navbar.css"
import { AuthContext } from "../src/AuthContext";
import { admin, user } from "../Constants/Data";


export const Navbar = ( {navTitle, navText} ) => {

   const [settingMessage, setSettingMessage] = useState(""); 
   const [dropDownMenu, setDropDownMenu] = useState(false); 
   const {isAdmin, setIsAdmin, setIsAuthenticated,} = useContext(AuthContext)
   const navigate = useNavigate();
   
   const handleSettingClick = () => {
      setSettingMessage("You're being directed to the settings page.")
     setTimeout( () => {
       setSettingMessage("");
       navigate("/settings");
      }, 5000 )
   }

   const handlelogOutClick = () => {
    const encryptedPassword = localStorage.getItem("currentPassword");
    localStorage.clear();
    localStorage.setItem("currentPassword", encryptedPassword);
    sessionStorage.clear();
    setIsAdmin(false);
    setIsAuthenticated(false);
    navigate("/login");
   }

   const showDropDownMenu = () => {
      setDropDownMenu(true);
      setTimeout( () => {
      setDropDownMenu(false);
      }, 1000000 )
   }
   
   return (
    <>
   <header className="navbar">
    <div>
      <h1 className="navbar-title" >{navTitle}</h1>
      <p className="navbar-text" >{navText}</p>
    </div>
    <div className="userMenu" onClick={() => showDropDownMenu()} >
      <img src={isAdmin?admin.ProfileImage:user.ProfileImage } alt="Profile" className="avatar" />
    </div> 
    </header>

    { dropDownMenu && 
      <div className="dropdown">
        <ul className="dropdownList" >
          <li className="dropdownListItem" onClick={() => handleSettingClick()} ><FiSettings /> Settings</li>
          <li className="dropdownListItem" onClick={() => handlelogOutClick()}  ><FiLogOut /> Log out</li>
        </ul>
      </div>
    }

    { settingMessage &&
      <div className='settingMessage' >
        {settingMessage}
      </div>}
  </>

  )};