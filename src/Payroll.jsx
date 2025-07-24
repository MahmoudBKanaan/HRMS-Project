import {Sidebar} from "/src/components/Sidebar.jsx"
import { Navbar } from '/src/components/Navbar';
import { FaUsers, FaCheckCircle, FaMoneyBillWave,FaRegClock  } from 'react-icons/fa';
import { StatsCard } from "./Attendance";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from '/src/AuthContext';
import Table from "./components/Table";
import "/src/Attendance.css"
import "/src/Payroll.css"
import Popup from "./components/Popup";
import PayrollForm from "./components/PayrollForm";





export const downloadPayslip = () => {
        
    }





const Payroll = () => {
    
    const [paymentTarget, setPaymentTarget] = useState({});

    const [madePayments, setMadePayments]               = useState("");
    const [pendingPayments, setPendingPayments]         = useState("");
    const [employeeNumber, setEmployeeNumber]           = useState("");
    const [totalPayroll, setTotalPayroll]               = useState("");

    const [paymentConfirmation, setPaymentConfirmation] = useState(false);
    const [payrollInfoPage, setPayrollInfoPage]         = useState(false);

    const { departments, userIndex, setDepartments} = useContext(AuthContext);


    useEffect(() => {

        let madePaymentsNumber = 0;
        let pendingPaymentsNumber = 0;
        let totalPayroll = 0;
        let EmployeeNumber = 0;
        {Object.entries(departments).map(([dept, users]) => {
            users.map((user, index) => {
                if (user.payments.status === "Paid") {
                    madePaymentsNumber = madePaymentsNumber+1;
                    EmployeeNumber = EmployeeNumber+1;
                    totalPayroll = totalPayroll+
                    Number(user.payroll.baseSalary)+
                    Number(user.payroll.housingBenefits)+
                    Number(user.payroll.transportationBenefits)+
                    Number(user.payroll.foodBenefits)+
                    Number(user.payroll.commissions)-
                    Number(user.payroll.deductions);
                } else if (user.payments.status === "Pending") {
                    pendingPaymentsNumber = pendingPaymentsNumber+1;
                    EmployeeNumber = EmployeeNumber+1;
                    totalPayroll = totalPayroll+
                    Number(user.payroll.baseSalary)+
                    Number(user.payroll.housingBenefits)+
                    Number(user.payroll.transportationBenefits)+
                    Number(user.payroll.foodBenefits)+
                    Number(user.payroll.commissions)-
                    Number(user.payroll.deductions);
                }
            })
            setMadePayments(madePaymentsNumber)
            setPendingPayments(pendingPaymentsNumber)
            setTotalPayroll(`$${totalPayroll.toLocaleString()}`)
            setEmployeeNumber(EmployeeNumber)
        })}
        
    },[departments])
    
    const confirmPayment = () => {
        if (!paymentTarget) return;
        const func = () => {
            if (userIndex !== undefined && userIndex !== null) {
                const {dept, users} = paymentTarget;
                const updatedusers = [...users]
                const currentPayments = updatedusers[userIndex].payments;
                updatedusers[userIndex] = {...updatedusers[userIndex],
                    payments: {...currentPayments, status: "Paid"} };
                setDepartments(prev => ({
                    ...prev, [dept]: updatedusers
                }))
                
            } else { setTimeout(() => {
                        func()
                        }, 100); 
                } 
        }
        func()
    }

    const confirmPaymentPopup = ({ dept , users}) => {
        setPaymentConfirmation(true)
        setPaymentTarget({ dept , users})
    }






    return (
        <div className='AttendanceContainer'>
        <Sidebar />
        <div className="mainContent">
        <Navbar  navTitle="Payroll" navText="View Payroll Details" />
            
        <div className="cardsContainer">
        < StatsCard icon={<FaCheckCircle />}    label="Made Payments"   value= {madePayments}  />
        < StatsCard icon={<FaRegClock />}       label="Pending"         value= {pendingPayments}  />
        < StatsCard icon={<FaUsers />}          label="Employees"       value= {employeeNumber}  />
        < StatsCard icon={<FaMoneyBillWave />}  label="Total Payroll"   value= {totalPayroll}  />
        </div>

        
        <div className="paymentTablesContainer"> 
        {Object.entries(departments).map(([dept, users]) => (
            
            <Table 
            key={dept}
            tableTitle={dept} 
            headerList={["Name", "Payment ID", "Value", "Due Date", "Issued", "Status", "Actions", ]} 
            rowList={ 
                users.map((user) => (
                    [user.name, user.payments.paymentId || "none",
                        `$${user.payments.value}` || "none",
                        user.payments.dueDate || "none",
                        user.payments.issueDate || "none",
                        user.payments.status || "none"]
                    )) 
                } 
                optionsList={["Confirm Payment","View Payroll Info.","Download Payslip"]} 
                optionsListFunctions={[
                    () => confirmPaymentPopup( {dept , users}), 
                    () => {setPayrollInfoPage(true);  setPaymentTarget({dept , users}) }, 
                    () => downloadPayslip({dept , users}), ]}   
                    />
                    
                ))}
        </div>
        
        {paymentConfirmation === true &&
        <Popup
        title="Confirm Payment"
        message="Are you sure you want to confirm this payment?"
        confirmationFunction={() => confirmPayment()} 
        cancellationFunction={() => setPaymentConfirmation(false)}
        />
        }

        {payrollInfoPage && userIndex !== null && userIndex !== undefined &&
        <PayrollForm    setPayrollInfoPage={setPayrollInfoPage} paymentTarget={paymentTarget}  />
        }

















        </div>
        </div>
    );
};

export default Payroll;