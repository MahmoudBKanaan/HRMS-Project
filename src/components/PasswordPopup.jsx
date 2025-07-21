import { useState } from 'react';
import CryptoJS from 'crypto-js';
import './PasswordPopup.css';
import "/src/login.css";
import { getSecretKey } from '../Login';

export const PasswordPopup = () => {
    
  const [current, setCurrent] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmNew, setConfirmNew] = useState('');
  const [error , setError] = useState("")



  const handlePasswordChange = () => {

      let     currentPassword = '';
      const   secretKey = getSecretKey();
      const   encryptedPassword = localStorage.getItem("currentPassword")

        if (encryptedPassword) {
            currentPassword = CryptoJS.AES.decrypt(encryptedPassword, secretKey).toString(CryptoJS.enc.Utf8);
        }

        if ( current !== currentPassword )  {
            setError('incorrect current password');
            setTimeout(() => {
                setError('');
            }, 5000);
            return;
        }  else if ( !newPass || newPass !== confirmNew) {
            setError('New passwords don\'t match!');
            setTimeout(() => {
                setError('');
            }, 5000);
            return;
        } else {
            if      (newPass.length < 8)            {  return"minimum length is 8 character!"}
            else if (!/[a-z]/.test(newPass))        {  return"Please include small letters"}
            else if (!/[A-Z]/.test(newPass))        { return"Please include Capital letters"}
            else if (!/[0-9]/.test(newPass))        {  return"Please include numbers"}
            else if (!/[!@#$%^&]/.test(newPass))    { return"Please include symbols !@#$%^& "}  
            else {
                const newEncryptedPassword = CryptoJS.AES.encrypt(newPass, secretKey).toString();
                localStorage.setItem("currentPassword", newEncryptedPassword)
                setError("Password was successfully updated.")
                setTimeout(() => {
                setError("")
                }, 5000);

            }}
    };

  return (
    <div className="popup-container">
      <h3>Change Password</h3>
      <input
        type="password"
        placeholder="Current Password"
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPass}
        onChange={(e) => setNewPass(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm New Password"
        value={confirmNew}
        onChange={(e) => setConfirmNew(e.target.value)}
      />
      <div className='errorMessageWrapper' >{error && <p className='errorMessage'>{error}</p>} </div>
      <button onClick={handlePasswordChange}>Change</button>
    </div>
  );
};




