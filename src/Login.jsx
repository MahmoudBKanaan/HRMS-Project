import { useContext, useEffect, useState } from 'react'
import './Login.css'
import { mockLogin } from '../mock-Server/mockLogin';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import  CryptoJS  from "crypto-js";

import Img1 from "./assets/loginWoman.svg";
import Img2 from "./assets/login01.png";
import Img3 from "./assets/login02.svg";
import Img4 from "./assets/login03.svg";
import Img5 from "./assets/login04.svg";
import Img6 from "./assets/loginMan.svg";



  export const getSecretKey = () => {
    const secretKey = "attentionIsTheCurrencyOfLife";
    return secretKey
  }


  function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error , setError] = useState("")
    const [rememberMe , setRememberMe] = useState(false);
    const navigate = useNavigate();
    const { setIsAdmin , setIsAuthenticated} = useContext(AuthContext)

    const validateInput = () => {
      if      (!email)                                          {  return"Email is required!"}
      else if (!email.includes("@") || !email.includes(".com")) {  return"Email is incorrect!"}
      else if (!password)                                       {  return"Password is required!"}
      else if (!/[a-z]/.test(password))                         {  return"Password must contain small letters"}
      else if (!/[A-Z]/.test(password))                         { return"Password must contain Capital letters"}
      else if (!/[0-9]/.test(password))                         {  return"Password must contain numbers"}
      else if (!/[!@#$%^&]/.test(password))                     { return"Password must contain symbols !@#$%^& "}  
      return
    }

  const handleLogin = async (e) => {
    e.preventDefault();

    const errorMessage = validateInput();
    setError(errorMessage)

    if(!errorMessage) {
      try { 
        const secretKey = getSecretKey();
        const res = await mockLogin (email, password, secretKey)
        if (res.success) {     
          setIsAuthenticated(true);
          console.log("Login Successful")
          const token = res.token;
          const encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
          localStorage.setItem("currentPassword", encryptedPassword)
            if (rememberMe) {
              localStorage.setItem("token", token);       
            if (res.admin) {
              setIsAdmin(true)
              localStorage.setItem("isAdmin","true")
            } else {
              setIsAdmin(false)
              localStorage.setItem("isAdmin","false")
            }
            }  else {
              sessionStorage.setItem("token", token);
            if (res.admin) {
              setIsAdmin(true)
              sessionStorage.setItem("isAdmin","true")
            } else {
              setIsAdmin(false)
              sessionStorage.setItem("isAdmin","false")
            }}
          navigate("/dashboard");
        }
      } catch (err) {
        setError(err.message);
      }}}
      

      

  return (
      <div className="login-page">
        <div className="login-container">     
              {/* Login Form */}
              <div className="login-form-wrapper">
                <h2 className="login-title">Login</h2>
                    <form className="login-form" onSubmit={(e) => handleLogin(e)}>
                      <div>
                          <input   type="text"  placeholder="admin@mail.com"  className="Username-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div>
                          <input type="password"  placeholder="Ss@225588" className="Password-input" value={password} onChange={(e) => setPassword(e.target.value)} />
                      </div>
                      <div className='errorMessageWrapper' >{error && <p className='errorMessage'>{error}</p>} </div>
                      <div className="checkbox-wrapper">
                          <input type="checkbox" id="remember" className="checkbox-input" checked={rememberMe} onChange={(e) => {setRememberMe(e.target.checked)}} />
                          <label htmlFor="remember">Remember me</label>
                      </div>
                      <button type="submit" className="login-button">
                          Sign in
                      </button>
                      <div className="forgot-password">
                      <Link  className="forgotPasswordButton" to="/forgotpassword"  >Forgot Password</Link>
                      </div>
                    </form>
              </div>
              
        </div>
        <div><img src={Img1}      alt="loginWoman"  className='loginWoman'/></div>
        <div><img src={Img2}      alt="login01"     className='login01'   /></div>
        <div><img src={Img3}      alt="login02"     className='login02'   /></div>
        <div><img src={Img4}      alt="login03"     className='login03'   /></div>
        <div><img src={Img5}      alt="login04"     className='login04'   /></div>
        <div><img src={Img6}      alt="loginMan"    className='loginMan'  /></div>

      </div>
    );
  }

  export default Login;
