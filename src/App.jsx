
import { Routes, Route, Navigate} from 'react-router-dom';
import Login  from './Login.jsx';
import ForgotPassword  from './ForgotPassword.jsx';
import DashBoard  from './DashBoard.jsx';
import Employees from './employees.jsx';
import Attendance from './attendance.jsx';
import Requests from './requests.jsx';
import Payroll from './payroll.jsx';
import Documents from './documents.jsx';
import RouteProtection from "./RouteProtection.jsx";
import { useContext } from 'react';
import { AuthContext } from './AuthContext.jsx';



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
    </Routes>  

    </>
  )}
export default App;