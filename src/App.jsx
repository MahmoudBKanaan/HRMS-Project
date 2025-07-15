
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


function App () {

  const {isAuthenticated, isLoading} = useContext(AuthContext)

  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', fontFamily: 'Roboto'}} >Loading...</div>
  }
  
  return ( 
    <>
    
    <Routes>
      <Route path="*"                 element={ isAuthenticated ? < Navigate to="/dashboard"  /> : <Navigate to="/login" /> }/> 
      <Route path="/login"            element={ <Login />               } />
      <Route path="/forgotpassword"   element={<ForgotPassword />      } />
      <Route path="/dashboard"        element={<RouteProtection> <DashBoard />            </RouteProtection>} />
      <Route path="/employees"        element={<RouteProtection> <Employees />            </RouteProtection>} />
      <Route path="/attendance"       element={<RouteProtection> <Attendance />            </RouteProtection>} />
      <Route path="/requests"         element={<RouteProtection> <Requests />            </RouteProtection>} />
      <Route path="/payroll"          element={<RouteProtection> <Payroll />            </RouteProtection>} />
      <Route path="/documents"        element={<RouteProtection> <Documents />            </RouteProtection>} />
      <Route path="/settings"        element={<RouteProtection> <Settings />            </RouteProtection>} />
    </Routes>  

    </>
  )}
export default App;