import './UnAuthorized.css';
import { useEffect , useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Unauthorized } from '../Constants/Data.js';


const UnAuthorized = () => {
    
    const [unAuthorizedMessage, setUnAuthorizedMessage] = useState('')
    const navigate = useNavigate();


    useEffect ( () => {
    setTimeout( () => {
       navigate("/dashboard");
      }, 8000 )
    },[]
    )
    
    return (
        <div className='unAuthorizedWrapper' >
            {Unauthorized.map( (message) => {
                
                return (
                <div className="unAuthorizedMessage">
                        {message.firstline}
                <div>   {message.secondline} </div>
                </div>
                )})}
                
        
        </div>
    )
};



export default UnAuthorized;