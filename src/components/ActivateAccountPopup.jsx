import { useContext } from 'react';
import './DisableAccountPopup.css';
import { AuthContext } from '../AuthContext';









const ActivateAccountPopup = ({users, setActivateAccountPopup, department, menuIndex}) => {
  
  const {departments, setDepartments} = useContext(AuthContext);


  const onCancel = () => {
    setActivateAccountPopup(false)
  }
  const onConfirm = () => {
      const updatedusers = [...users]
      updatedusers[menuIndex] = {
        ...updatedusers[menuIndex],
        status: "Active"
      };
      setDepartments(prev => ({
        ...prev, [department]: updatedusers
      }))
      setActivateAccountPopup(false)
        }


  const hideButton = () => {
    setActivateAccountPopup(false)
  }
  

  return (
    <div className="popup-overlay" onClick={() => hideButton()}>
      <div className="question-popup-container">
        <div className='question-popup-title'>Acivate Account</div>
        <p>Are you sure you want to activate the account?</p>
        <div className="question-popup-buttons">
          <button className="btn-no" onClick={() => onCancel()}>No</button>
          <button className="btn-yes" onClick={() => onConfirm()} >Yes</button>
        </div>
      </div>
    </div>
  );
};

export default ActivateAccountPopup;
