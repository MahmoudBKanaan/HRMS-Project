import './PayrollForm.css';
import { downloadPayslip } from '../Payroll';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext';


const PayrollForm = ({setPayrollInfoPage, paymentTarget}) => {

 
  const {userIndex} = useContext(AuthContext);
  const [user, setUser] = useState()
  const {dept, users} = paymentTarget;

  useEffect(() => {

    const func = () => {
        if (userIndex !== undefined && userIndex !== null) {
            setUser(users[userIndex])
          } else { setTimeout(() => {
            func()
          }, 100); 
        } 
      }
      func()
    }, [])
    
  if (!user) return null;
  return (
    <div onClick={(e) => { if (e.target.classList.contains("payrollFormOverlay")) { setPayrollInfoPage(false) } }} className='payrollFormOverlay'>

    <div className="payroll-container">

      <h1 className="title">Payroll Information</h1>

      <div className="payrollFormSection">
        <h2>Employee information</h2>
        <div className="form-grid">
          <div className="form-group">
            <label>Employee Name</label>
            <input value={user.firstName+ " "+ user.middleName + " " + user.lastName } readOnly />
          </div>
          <div className="form-group">
            <label>Role</label>
            <input value={user.role} readOnly />
          </div>
          <div className="form-group">
            <label>Department</label>
            <input value={user.department + " Department"} readOnly />
          </div>
          <div className="form-group">
            <label>Employee ID</label>
            <input value={user.id} readOnly />
          </div>
          <div className="form-group">
            <label>Employment Status</label>
            <input value={user.status} readOnly />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input value={user.hireDate} readOnly />
          </div>
        </div>
      </div>

      <div className="payrollFormSection">
        <h2>Payroll information</h2>
        <div className="form-grid">
          <div className="form-group">
            <label>Base Salary</label>
            <input value={"$"+ user.payroll.baseSalary} readOnly />
          </div>
          <div className="form-group">
            <label>Housing Benefits</label>
            <input value={"$"+ user.payroll.housingBenefits} readOnly />
          </div>
          <div className="form-group">
            <label>Transportation Benefits</label>
            <input value={"$"+ user.payroll.transportationBenefits} readOnly />
          </div>
          <div className="form-group">
            <label>Food Benefits</label>
            <input value={"$"+ user.payroll.foodBenefits} readOnly />
          </div>
          <div className="form-group">
            <label>Commissions</label>
            <input value={"$"+ user.payroll.commissions} readOnly />
          </div>
          <div className="form-group">
            <label>Deductions</label>
            <input value={"$"+ user.payroll.deductions} readOnly />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Net Payment</label>
          <input value={"$"+(
             Number(user.payroll.baseSalary)
             +Number(user.payroll.housingBenefits)
             +Number(user.payroll.transportationBenefits)
             +Number(user.payroll.foodBenefits)
             +Number(user.payroll.commissions)
             -Number(user.payroll.deductions))
             } readOnly />
        </div>
      </div>

      <div className="button-container">
        <button onClick={() => downloadPayslip()} className="download-btn">Download Payslip</button>
      </div>
    </div>
    </div>
  );
};

export default PayrollForm;