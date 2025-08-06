import {AuthContext} from "/src/AuthContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom";
import "./RouteProtection.css";
import "./index.css";



const RouteProtection =  ({ children, adminOnly = false }) => {


    const {isAdmin ,isAuthenticated, isLoading   } = useContext(AuthContext);

    if (isLoading){ return (
            <div className="container">
             <div className="generalMessage" >Loading...</div>
            </div>
            )}
    if (!isAuthenticated)       {return <Navigate to="/login" replace /> } 
    if (adminOnly && !isAdmin)  {return <Navigate to="/unauthorized" replace />}

    return children

}

export default RouteProtection