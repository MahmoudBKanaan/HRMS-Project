
import { Routes, Route, Navigate} from 'react-router-dom';
import RouteProtection from "./RouteProtection.jsx";
import { AuthContext } from '/src/AuthContext.jsx';
import { useContext, useEffect } from 'react';

import Login  from './Login.jsx';
import ForgotPassword  from './ForgotPassword.jsx';
import DashBoard  from './DashBoard.jsx';
import Employees from './Employees.jsx';
import Attendance from './Attendance.jsx';
import Requests from './Requests.jsx';
import Payroll from './Payroll.jsx';
import Documents from './Documents.jsx';
import Settings from './Settings.jsx';
import  UnAuthorized  from './UnAuthorized.jsx';
import { Departments, accounts } from '../Constants/Data';


function App () {

  const { isAdmin,isAuthenticated, isLoading} = useContext(AuthContext)




  useEffect(() => {
    if(!localStorage.getItem('departments')) {
      localStorage.setItem("departments", JSON.stringify(Departments))
    }
    if(!localStorage.getItem('accounts')) {
      localStorage.setItem("accounts", JSON.stringify(accounts))
    }
  },[])

  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2vw', letterSpacing:'0.2vw' , height: '100vh', width: '100vw' ,  fontFamily: 'Roboto'}} >Loading...</div>
  }
  
  return ( 
    <>
    
    <Routes>
      <Route path="*"                 element={ isAuthenticated ? < Navigate to="/dashboard"  /> : <Navigate to="/login" /> }/> 
      <Route path="/login"            element={ <Login />               } />
      <Route path="/forgotpassword"   element={<ForgotPassword />      } />
      
      { isAuthenticated && (
        <>
        <Route path="/unauthorized"      element={<UnAuthorized />      } />
        <Route path="/dashboard"        element={<RouteProtection> <DashBoard />            </RouteProtection>} />
        <Route path="/requests"         element={<RouteProtection> <Requests />            </RouteProtection>} />
        <Route path="/settings"        element={<RouteProtection> <Settings />            </RouteProtection>} />       
        </>
      )}
      { isAuthenticated &&  isAdmin && (
        <>
        <Route path="/employees"        element={<RouteProtection adminOnly={true} > <Employees />            </RouteProtection>} />
        <Route path="/attendance"       element={<RouteProtection adminOnly={true} > <Attendance />            </RouteProtection>} />
        <Route path="/payroll"          element={<RouteProtection adminOnly={true} > <Payroll />            </RouteProtection>} />
        <Route path="/documents"        element={<RouteProtection adminOnly={true} > <Documents />            </RouteProtection>} />
        </>
      )}
    </Routes>  

    </>
  )}
export default App;