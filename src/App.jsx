
import { Routes, Route, Navigate} from 'react-router-dom';
import RouteProtection from "./RouteProtection.jsx";
import { AuthContext } from './AuthContext.jsx';
import { useContext } from 'react';

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


function App () {

  const { isAdmin,isAuthenticated, isLoading} = useContext(AuthContext)

  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', fontFamily: 'Roboto'}} >Loading...</div>
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