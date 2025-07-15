import "./ForgotPassword.css"
import { useState } from 'react'
import { mockLogin } from '../mock-Server/mockLogin';
import { Navigate ,useNavigate, Link } from 'react-router-dom';


function delay(ms)  {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function ForgotPassword () {

const [error, setError] = useState("")
const [email, setEmail] = useState("");
const navigate = useNavigate();

const handlepassword = async (e) => {
    e.preventDefault();
    if      (!email || !email.includes("@") || !email.includes(".com")) {
        setError("Email is Invalid")
        await delay(4000);
        setError("")
    } else {             
      setError("Email is sent")
      await delay(4000);
      setError("You will be directed to login")
      await delay(4000);
      navigate("/login");
    }

}


    
return (

    <div className="password-page">
      <div className="password-container">     
            {/* password Form */}
            <div className="password-form-wrapper">
              <h2 className="password-title">Password Reset</h2>
                  <form className="password-form" onSubmit={(e) => handlepassword(e)}>
                    <div>
                        <input   type="text"  placeholder="Email Address"  className="email-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    {<div className='errorMessageWrapper' >{error && <p className='errorMessage'>{error}</p>} </div>}
                    <button type="submit" className="password-button">
                        Reset Password
                    </button>
                    <div className="signin-wrapper">
                    <Link  className="signin-Button" to="/login"  >Sign in</Link>
                    </div>
                  </form>
            </div>
            
      </div>
      <div><img src="/src/assets/loginWoman.svg"  alt="passwordWoman"  className='passwordWoman'/></div>
      <div><img src="/src/assets/login01.svg"     alt="password01"     className='password01'   /></div>
      <div><img src="/src/assets/login02.svg"     alt="password02"     className='password02'   /></div>
      <div><img src="/src/assets/login03.svg"     alt="password03"     className='password03'   /></div>
      <div><img src="/src/assets/login04.svg"     alt="password04"     className='password04'   /></div>
      <div><img src="/src/assets/loginMan.svg"    alt="passwordMan"    className='passwordMan'  /></div>

    </div>
  );



}

export default ForgotPassword




