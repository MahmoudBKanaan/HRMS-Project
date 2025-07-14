import {AuthContext} from "./AuthContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom";



const RouteProtection =  ({ children }) => {


    const {isAuthenticated, isLoading   } = useContext(AuthContext);

    if (isLoading)
         {        return <div style={{ display: 'flex', justifyContent: 'center', width: "100vw", height: "100vw", backgroundcolor:"#dedede" , 
            alignItems: 'center',fontFamily: 'Roboto'}} >Loading...</div>}
    if (!isAuthenticated) {       return <Navigate to="/login" replace />    } 
    return children

}

export default RouteProtection