import './UnAuthorized.css';
import { useEffect , useState } from 'react';
import { useNavigate } from 'react-router-dom';



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
                        You lack the permission to view this page.
                <div>   You're being directed to the dashboard. </div>
                </div>
                )})}
                
        
        </div>
    )
};



export default UnAuthorized;