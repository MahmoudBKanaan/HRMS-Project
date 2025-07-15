
import { useState } from "react";
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import "./Navbar.css"


export const Navbar = ( {navTitle, navText} ) => {

   const [settingMessage, setSettingMessage] = useState(""); 
   const [dropDownMenu, setDropDownMenu] = useState(false); 
   const navigate = useNavigate();
   
   const handleSettingClick = () => {
      setSettingMessage("You will be directed to the settings page.")
     setTimeout( () => {
       setSettingMessage("");
       navigate("/settings");
      }, 5000 )
   }

   const handlelogOutClick = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
   }

   const showDropDownMenu = () => {
      setDropDownMenu(true);
      setTimeout( () => {
      setDropDownMenu(false);
      }, 10000 )
   }
   
   return (
    <>
   <header className="navbar">
    <div>
      <h1 className="navbar-title" >{navTitle}</h1>
      <p className="navbar-text" >{navText}</p>
    </div>
    <div className="userMenu" onClick={() => showDropDownMenu()} >
      <img src="/src/assets/profileImage.png" alt="Profile" className="avatar" />
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