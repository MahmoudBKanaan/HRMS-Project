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
import jsPDF from "jspdf";









const Payroll = () => {

    
    const [paymentTarget, setPaymentTarget] = useState({});
    
    const [madePayments, setMadePayments]               = useState("");
    const [pendingPayments, setPendingPayments]         = useState("");
    const [employeeNumber, setEmployeeNumber]           = useState("");
    const [totalPayroll, setTotalPayroll]               = useState("");

    const [paymentConfirmation, setPaymentConfirmation] = useState(false);
    const [payrollInfoPage, setPayrollInfoPage]         = useState(false);

    const { departments, userIndex, setDepartments} = useContext(AuthContext);


    const downloadPayslip = ({users}) => {
            
            const user = users[userIndex];

            const doc = new jsPDF();

            const fullName = `${user.firstName} ${user.middleName} ${user.lastName}`;
            const netPay =
                Number(user.payroll.baseSalary) +
                Number(user.payroll.housingBenefits) +
                Number(user.payroll.transportationBenefits) +
                Number(user.payroll.foodBenefits) +
                Number(user.payroll.commissions) -
                Number(user.payroll.deductions);

            let y = 20;

            doc.setFontSize(20);
            doc.setFont("helvetica", "bold");
            doc.text("Payslip", 105, y, null, null, "center");

            y += 10;
            doc.setFontSize(12);
            doc.text("Employee Information", 14, y);

            y += 8;
            doc.setFont("helvetica", "bold");
            doc.text("Employee Name:", 14, y);
            doc.setFont("helvetica", "normal");
            doc.text(fullName, 60, y);

            y += 7;
            doc.setFont("helvetica", "bold");
            doc.text("Role:", 14, y);
            doc.setFont("helvetica", "normal");
            doc.text(user.role, 60, y);

            y += 7;
            doc.setFont("helvetica", "bold");
            doc.text("Department:", 14, y);
            doc.setFont("helvetica", "normal");
            doc.text(`${user.department} Department`, 60, y);

            y += 7;
            doc.setFont("helvetica", "bold");
            doc.text("Employee ID:", 14, y);
            doc.setFont("helvetica", "normal");
            doc.text(user.id.toString(), 60, y);

            y += 7;
            doc.setFont("helvetica", "bold");
            doc.text("Employment Status:", 14, y);
            doc.setFont("helvetica", "normal");
            doc.text(user.status, 60, y);

            y += 7;
            doc.setFont("helvetica", "bold");
            doc.text("Hire Date:", 14, y);
            doc.setFont("helvetica", "normal");
            doc.text(user.hireDate, 60, y);

            y += 12;
            doc.setFontSize(12);
            doc.text("Payroll Details", 14, y);

            const payrollFields = [
                ["Base Salary", user.payroll.baseSalary],
                ["Housing Benefits", user.payroll.housingBenefits],
                ["Commuting Benefits", user.payroll.transportationBenefits],
                ["Food Benefits", user.payroll.foodBenefits],
                ["Commissions", user.payroll.commissions],
                ["Deductions", user.payroll.deductions],
            ];

            y += 8;
            payrollFields.forEach(([label, value]) => {
                doc.setFont("helvetica", "bold");
                doc.text(`${label}:`, 14, y);
                doc.setFont("helvetica", "normal");
                doc.text(`$${value}`, 60, y);
                y += 7;
            });

            y += 3;
            doc.setFont("helvetica", "bold");
            doc.text("Net Payment:", 14, y);
            doc.setFont("helvetica", "normal");
            doc.text(`$${netPay.toFixed(2)}`, 60, y);

            doc.save(`${fullName.replace(/ /g, "_")}_Payslip.pdf`);

                




        
        
    }


    useEffect(() => {

        let madePaymentsNumber = 0;
        let pendingPaymentsNumber = 0;
        let totalPayroll = 0;
        let EmployeeNumber = 0;

        {Object.entries(departments).map(([dept, users]) => {
            users.map((user, index) => {
                        EmployeeNumber = EmployeeNumber+1;
                        totalPayroll = totalPayroll+
                        Number(user.payroll.baseSalary)+
                        Number(user.payroll.housingBenefits)+
                        Number(user.payroll.transportationBenefits)+
                        Number(user.payroll.foodBenefits)+
                        Number(user.payroll.commissions)-
                        Number(user.payroll.deductions);
                user.payments.map((payment) => {
                    if (payment.status === "Paid") {
                        madePaymentsNumber = madePaymentsNumber+1;
                    } else if (payment.status === "Pending") {
                        pendingPaymentsNumber = pendingPaymentsNumber+1;
                    }
                })
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
            const { dept, users } = paymentTarget;
            const updatedUsers = [...users];
            const user = updatedUsers[userIndex];

            const paymentsArray = Array.isArray(user.payments) ? [...user.payments] : [];

            if (paymentsArray.length > 0) {
                const lastPaymentIndex = paymentsArray.length - 1;
                paymentsArray[lastPaymentIndex] = {
                    ...paymentsArray[lastPaymentIndex],
                    status: "Paid"
                };

                updatedUsers[userIndex] = {
                    ...user,
                    payments: paymentsArray
                };
                setDepartments(prev => ({
                    ...prev,
                    [dept]: updatedUsers
                }));
            }
        } else {
            setTimeout(() => {
                func();
            }, 100);
        }
    };

    func();
    setPaymentConfirmation(false)


};





    return (
        <div className='PayrollContainer'>
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
        {Object.entries(departments).map(([dept, users]) => {
                let entry = [];
                users.map((user, index) => {
                user.payments.map((payment) => {
                    entry = [...entry,
                        [user.name,
                            payment.paymentId || "none",
                            `$${payment.value}` || "none",
                            payment.dueDate || "none",
                            payment.issueDate || "none",
                            payment.status || "none"]
                    ]
                })
            })

            return (

            

            <Table 
            key={dept}
            tableTitle={dept} 
            headerList={["Name", "Payment ID", "Value", "Due Date", "Issued", "Status", "Actions", ]} 
            rowList={ entry
                } 
                optionsList={["Confirm Payment","View Payroll Info.","Download Payslip"]} 
                optionsListFunctions={[
                    () => {setPaymentConfirmation(true);    setPaymentTarget({dept , users})}, 
                    () => {setPayrollInfoPage(true);        setPaymentTarget({dept , users})}, 
                    () => {downloadPayslip({users});                                        }]}   
                    />
                )
        }
                
                
                
                )}
        </div>
        
        {paymentConfirmation === true &&
        <Popup
        title="Confirm Payment"
        message="Are you sure you want to confirm this payment?"
        confirmationFunction={() => confirmPayment()} 
        cancellationFunction={() => setPaymentConfirmation(false)}
        />
        }

        {payrollInfoPage && 
        <PayrollForm    setPayrollInfoPage={setPayrollInfoPage} paymentTarget={paymentTarget}  downloadPayslip={({users}) => downloadPayslip({users})} />
        }
        </div>
        </div>
    );
};

export default Payroll;