
import { useContext, useEffect, useState } from "react";
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "./Navbar.css";



export const Navbar = ( {navTitle, navText} ) => {

   const [settingMessage, setSettingMessage] = useState(""); 
   const [dropDownMenu, setDropDownMenu] = useState(false); 

   const {isAdmin, setIsAdmin, setIsAuthenticated, departments, accounts} = useContext(AuthContext)
   
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
    localStorage.setItem("accounts", JSON.stringify(accounts));
    localStorage.setItem("departments", JSON.stringify(departments));
    localStorage.setItem("currentPassword", encryptedPassword);
    sessionStorage.clear();
    setIsAdmin(false);
    setIsAuthenticated(false);
    navigate("/login");

    
   }

   const showDropDownMenu = () => {
      setDropDownMenu(prev => prev === true? false:true);
      setTimeout( () => {
      setDropDownMenu(false);
      }, 10000 )
   }

   useEffect(() => {
    if(typeof accounts === "object") {
      localStorage.setItem("accounts", JSON.stringify(accounts));
    }
   },[accounts])
   useEffect(() => {
    if(typeof departments === "object") {
     localStorage.setItem("departments", JSON.stringify(departments));
    }
   },[departments])
   
   return (
    <>
   <header className="navbar">
    <div>
      <h1 className="navbar-title" >{navTitle}</h1>
      <p className="navbar-text" >{navText}</p>
    </div>
    <div className="userMenu" onClick={() => showDropDownMenu()} >
      <img src={isAdmin?accounts.admin.profileImage:accounts.user.profileImage } alt="Profile" className="avatar" />
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