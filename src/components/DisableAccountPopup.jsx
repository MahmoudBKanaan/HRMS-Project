import { useContext } from 'react';
import './DisableAccountPopup.css';
import { AuthContext } from '../AuthContext';









const DisableAccountPopup = ({users, setDisableAccountPopup, department, menuIndex}) => {
  
  const {departments, setDepartments} = useContext(AuthContext);


  const onCancel = () => {
    setDisableAccountPopup(false)
  }
  const onConfirm = () => {
      const updatedusers = [...users]
      updatedusers[menuIndex] = {
        ...updatedusers[menuIndex],
        status: "Disabled"
      };
      setDepartments(prev => ({
        ...prev, [department]: updatedusers
      }))
      setDisableAccountPopup(false)
        }


  const hideButton = () => {
    setDisableAccountPopup(false)
  }
  

  return (
    <div className="popup-overlay" onClick={() => hideButton()}>
      <div className="question-popup-container">
        <div className='question-popup-title'>Disable Account</div>
        <p>Are you sure you want to disable the account?</p>
        <div className="question-popup-buttons">
          <button className="btn-no" onClick={() => onCancel()}>No</button>
          <button className="btn-yes" onClick={() => onConfirm()} >Yes</button>
        </div>
      </div>
    </div>
  );
};

export default DisableAccountPopup;
