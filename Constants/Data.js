import adminImage     from "../assets/adminImage.png" 
import userImage      from "../assets/userImage.png" 
import profileImage01 from "../assets/profileImage01.png" 
import profileImage02 from "../assets/profileImage02.png" 
import profileImage03 from "../assets/profileImage03.png" 
import profileImage04 from "../assets/profileImage04.png" 
import profileImage05 from "../assets/profileImage05.png" 
import profileImage06 from "../assets/profileImage06.png" 
import profileImage07 from "../assets/profileImage07.png" 
import profileImage08 from "../assets/profileImage08.png" 
import profileImage09 from "../assets/profileImage09.png" 
import profileImage10 from "../assets/profileImage10.png" 
import profileImage11 from "../assets/profileImage11.png" 
import profileImage12 from "../assets/profileImage12.png" 
import profileImage13 from "../assets/profileImage13.png" 
import profileImage14 from "../assets/profileImage14.png" 
import profileImage15 from "../assets/profileImage15.png" 
import profileImage16 from "../assets/profileImage16.png" 
import profileImage17 from "../assets/profileImage17.png" 
import profileImage18 from "../assets/profileImage18.png" 
import profileImage19 from "../assets/profileImage19.png" 
import profileImage20 from "../assets/profileImage20.png" 





export const accounts =  {

  "admin": 
  
  {
    id: "45467",
    accountType: "admin" ,
    profileImage: adminImage,
    firstName: "Neo",
    lastName: "Arel",
    middleName: "B.",
    email: "Neo7368@gmail.com",
    phone: "+966576366939",
    address: "28th St, Dammam KSA",
    dateOfBirth: "1996-01-26",
    gender: "Female",
    hireDate: "March 22, 2025",
    department: "IT",
    role: "Software Engineer",
    employmentStatus: "Active",
    attendance: "99.2%",

    payroll: {
        baseSalary: 5000,
        housingBenefits: 1000,
        transportationBenefits: 500,
        foodBenefits: 300,
        commissions: 1500,
        deductions: 1000,
        netPay: 7300,
      },
    documents: [
      {
        title: "ID",
        type: "PDF",
        size: "85 KB",
        uploadedAt: "2025-02-06"
      },
      {
        title: "contract",
        type: "JPG",
        size: "88 KB",
        uploadedAt: "2025-02-06"
      }],
    requests: 
        [
          {
            requestId: "45874",
            requestType: "leave",
            startDate: "2025-08-15",
            endDate: "2025-09-15",
            reason: "The employee is .....",
            status: "Rejected"
          },
          {
            requestId: "46546",
            requestType: "resignation",
            startDate: "2025-08-15",
            endDate: "2025-09-15",
            reason: "The employee is .....",
            status: "pending"
          },
          {
            requestId: "45874",
            requestType: "resignation",
            date: "2025-09-15",
            reason: "The employee is .....",
            status: "Rejected"
          },
          {
            requestId: "65465",
            requestType: "leave",
            date: "2025-09-15",
            reason: "The employee is .....",
            status: "Approved"
          },
        ]
    },
  
  "user": 
  {
    id: "47854",
    accountType: "user" ,
    profileImage: userImage,
    firstName: "Diana",
    lastName: "Harris",
    middleName: "S.",
    email: "Harris.Diana@gmail.com",
    phone: "+966576366939",
    address: "28th St, Dammam KSA",
    dateOfBirth: "1995-01-26",
    gender: "Female",
    hireDate: "May 25, 2024",
    department: "Finance",
    role: "Financial Analyst",
    employmentStatus: "Active",
    attendance: "88.2%",
    payroll: {
        baseSalary: 5000,
        housingBenefits: 1000,
        transportationBenefits: 500,
        foodBenefits: 300,
        commissions: 1500,
        deductions: 1000,
        netPay: 7300,
      },
        documents: [
      {
        title: "ID",
        type: "PDF",
        size: "85 KB",
        uploadedAt: "2025-02-06"
      },
      {
        title: "contract",
        type: "PDF",
        size: "88 KB",
        uploadedAt: "2025-02-06"
      }],
    requests: {
        leave: [
          {
            requestId: "45874",
            startDate: "2025-08-15",
            endDate: "2025-09-15",
            reason: "The employee is .....",
            status: "Rejected"
          },
          {
            requestId: "46546",
            startDate: "2025-08-15",
            endDate: "2025-09-15",
            reason: "The employee is .....",
            status: "pending"
          },
        ],
        resignation:[
          {
            requestId: "45874",
            date: "2025-09-15",
            reason: "The employee is .....",
            status: "Rejected"
          },
          {
            requestId: "65465",
            date: "2025-09-15",
            reason: "The employee is .....",
            status: "Approved"
          },
        ]
    }
  }
  
}


export const Departments = {

    "IT Department": [
    {
      id: "11012",
      accountType: "admin",
      profileImage: profileImage01,
      name: "Layla S. Bennett",
      status: "active",
      firstName: "Layla",
      middleName: "S.",
      lastName: "Bennett",
      email: "layla.s.bennett@company.com",
      phone: "+1-312-555-0187",
      address: "742 Evergreen Terrace, Springfield, IL, USA",
      dateOfBirth: "1994-05-18",
      gender: "Female",
      hireDate: "2024-09-10",
      department: "IT",
      role: "DevOps Engineer",
      employmentStatus: "Active",
      attendance: "97.8%",
      checkedin: null, checkedout: null,
      payments: [
        { paymentId: "7703", value: 5567, dueDate: "2025-07-16", issueDate: "2025-07-29", status: "Pending" },
      ] ,

      payroll: {
        baseSalary: 6500,
        housingBenefits: 1400,
        transportationBenefits: 700,
        foodBenefits: 400,
        commissions: 0,
        deductions: 900,
        netPay: 8300,
      },
      documents: ["ID", "Contract", "AWS Cert"],
      documentsDetails: [
        { title: "ID",        type: "JPG", size: "80 KB", uploadedAt: "2024-09-11" },
        { title: "Contract",  type: "JPG", size: "95 KB", uploadedAt: "2024-09-11" },
        { title: "AWS Cert",  type: "PDF", size: "120 KB", uploadedAt: "2025-01-05" }
      ],
      requests: [
        { requestId: "60021", requestType: "leave", startDate: "2025-08-01", endDate: "2025-08-10", reason: "Family vacation", status: "Rejected" },
        { requestId: "60022", requestType: "training", startDate: "2025-09-15", endDate: "2025-09-19", reason: "Kubernetes workshop", status: "Pending" }
      ]
    },
    {
      id: "11013",
      accountType: "user",
      profileImage: profileImage11,
      name: "Sam A. Thompson",
      status: "active",
      firstName: "Sam",
      middleName: "A.",
      lastName: "Thompson",
      email: "fahad.a.thompson@company.com",
      phone: "+1-415-555-0192",
      address: "123 Market St, San Francisco, CA, USA",
      dateOfBirth: "1991-11-22",
      gender: "Male",
      hireDate: "2023-12-01",
      department: "IT",
      role: "Front-End Developer",
      employmentStatus: "Active",
      attendance: "92.5%",
       checkedin: null, checkedout:null ,
       payments:  [
         { paymentId: "4628", value: 6289, dueDate: "2025-09-28", issueDate: "2025-07-19", status: "Pending" },
        ]
,

      payroll: {
        baseSalary: 4800,
        housingBenefits: 1100,
        transportationBenefits: 550,
        foodBenefits: 350,
        commissions: 0,
        deductions: 650,
        netPay: 6650,
      },
      documents: ["ID", "Contract"],
      documentsDetails: [
        { title: "ID", type: "JPG", size: "88 KB", uploadedAt: "2023-12-02" },
        { title: "Contract", type: "JPG", size: "90 KB", uploadedAt: "2023-12-02" }
      ],
      requests: [
        { requestId: "60031", requestType: "leave", startDate: "2025-10-05", endDate: "2025-10-12", reason: "Family reunion", status: "Rejected" },
        { requestId: "60032", requestType: "equipment", startDate: "2025-07-20", reason: "New laptop", status: "Pending" }
      ]
    },
    {
      id: "11014",
      accountType: "user",
      profileImage: profileImage02,
      name: "Sara M. Olson",
      status: "active",
      firstName: "Sara",
      middleName: "M.",
      lastName: "Olson",
      email: "sara.m.olson@company.com",
      phone: "+1-212-555-0175",
      address: "456 Park Ave, New York, NY, USA",
      dateOfBirth: "1993-02-05",
      gender: "Female",
      hireDate: "2025-02-14",
      department: "IT",
      role: "QA Automation Engineer",
      employmentStatus: "Active",
      attendance: "95.0%",
checkedin: "07:42", checkedout: null,
payments: [
  { paymentId: "2522", value: 5626, dueDate: "2025-08-07", issueDate: "2025-06-30", status: "Pending" },
]  ,


      payroll: {
        baseSalary: 5200,
        housingBenefits: 1200,
        transportationBenefits: 600,
        foodBenefits: 350,
        commissions: 0,
        deductions: 700,
        netPay: 7350,
      },
      documents: ["ID", "Contract", "Test Report"],
      documentsDetails: [
        { title: "ID", type: "PDF", size: "86 KB", uploadedAt: "2025-02-15" },
        { title: "Contract", type: "JPG", size: "91 KB", uploadedAt: "2025-02-15" },
        { title: "Test Report", type: "PDF", size: "225 KB", uploadedAt: "2025-06-10" }
      ],
      requests: [
        { requestId: "60041", requestType: "leave", startDate: "2025-11-01", endDate: "2025-11-08", reason: "Medical", status: "Approved" }
      ]
    },
    {
      id: "11015",
      accountType: "user",
      profileImage: profileImage12,
      name: "Jade K. Foster",
      status: "disabled",
      firstName: "Jade",
      middleName: "K.",
      lastName: "Foster",
      email: "Jade.k.foster@company.com",
      phone: "+1-213-555-0168",
      address: "789 Sunset Blvd, Los Angeles, CA, USA",
      dateOfBirth: "1987-08-30",
      gender: "Male",
      hireDate: "2022-04-18",
      department: "IT",
      role: "Network Administrator",
      employmentStatus: "Disabled",
      attendance: "68.4%",
      checkedin: null, checkedout: null,
      payments: [
        { paymentId: "4547", value: 9374, dueDate: "2025-07-30", issueDate: "2025-06-08", status: "Pending" }
      ]
,

      payroll: {
        baseSalary: 5600,
        housingBenefits: 1300,
        transportationBenefits: 650,
        foodBenefits: 400,
        commissions: 0,
        deductions: 1100,
        netPay: 7050,
      },
      documents: ["ID", "Contract"],
      documentsDetails: [
        { title: "ID", type: "JPG", size: "83 KB", uploadedAt: "2022-04-19" },
        { title: "Contract", type: "JPG", size: "87 KB", uploadedAt: "2022-04-19" }
      ],
      requests: [
        { requestId: "60051", requestType: "leave", startDate: "2024-12-20", endDate: "2025-01-05", reason: "Sabbatical", status: "Approved" },
        { requestId: "60052", requestType: "resignation", startDate: "2025-06-30", reason: "Contract end", status: "Rejected" }
      ]
    }
  ],

  "Sales Department": [
    {
      id: "21011",
      accountType: "admin",
      profileImage: profileImage03,
      name: "Maisa R. Morgan",
      status: "active",
      firstName: "Maisa",
      middleName: "R.",
      lastName: "Morgan",
      email: "Maisa.r.morgan@company.com",
      phone: "+1-305-555-0134",
      address: "321 Biscayne Blvd, Miami, FL, USA",
      dateOfBirth: "1989-12-10",
      gender: "Female",
      hireDate: "2024-05-02",
      department: "Sales",
      role: "Sales Manager",
      employmentStatus: "Active",
      attendance: "94.6%",
      checkedin: "06:58", checkedout: null,
      payments: [
        
          
          { paymentId: "9309", value: 3421, dueDate: "2025-08-23", issueDate: "2025-07-14", status: "Pending" },
        
      ]
,

      payroll: {
        baseSalary: 7000,
        housingBenefits: 1500,
        transportationBenefits: 800,
        foodBenefits: 450,
        commissions: 2500,
        deductions: 1000,
        netPay: 11250,
      },
      documents: ["ID", "Contract", "Q2 Report"],
      documentsDetails: [
        { title: "ID", type: "PDF", size: "89 KB", uploadedAt: "2024-05-03" },
        { title: "Contract", type: "PDF", size: "94 KB", uploadedAt: "2024-05-03" },
        { title: "Q2 Report", type: "XLSX", size: "350 KB", uploadedAt: "2025-07-05" }
      ],
      requests: [
        { requestId: "70021", requestType: "leave", startDate: "2025-08-20", endDate: "2025-08-30", reason: "Family wedding", status: "Pending" }
      ]
    },
    {
      id: "21012",
      accountType: "user",
      profileImage: profileImage18,
      name: "John F. Parker",
      status: "active",
      firstName: "John",
      middleName: "F.",
      lastName: "Parker",
      email: "John.f.parker@company.com",
      phone: "+1-312-555-0145",
      address: "600 W Madison St, Chicago, IL, USA",
      dateOfBirth: "1992-04-14",
      gender: "Male",
      hireDate: "2023-10-12",
      department: "Sales",
      role: "Account Executive",
      employmentStatus: "Active",
      attendance: "90.2%",
      checkedin: null, checkedout: null,
      payments: [


        { paymentId: "6534", value: 7220, dueDate: "2025-07-12", issueDate: "2025-06-17", status: "Pending" },
      ], 

      payroll: {
        baseSalary: 5500,
        housingBenefits: 1200,
        transportationBenefits: 600,
        foodBenefits: 350,
        commissions: 1800,
        deductions: 700,
        netPay: 8450,
      },
      documents: ["ID", "Contract"],
      documentsDetails: [
        { title: "ID", type: "JPG", size: "85 KB", uploadedAt: "2023-10-13" },
        { title: "Contract", type: "JPG", size: "90 KB", uploadedAt: "2023-10-13" }
      ],
      requests: [
        { requestId: "70031", requestType: "leave", startDate: "2025-11-10", endDate: "2025-11-18", reason: "Conference attendance", status: "Approved" }
      ]
    },
    {
      id: "21013",
      accountType: "user",
      profileImage: profileImage04,
      name: "Nour H. Stevens",
      status: "active",
      firstName: "Noura",
      middleName: "H.",
      lastName: "Stevens",
      email: "noura.h.stevens@company.com",
      phone: "+1-617-555-0128",
      address: "200 Clarendon St, Boston, MA, USA",
      dateOfBirth: "1995-09-28",
      gender: "Female",
      hireDate: "2025-01-05",
      department: "Sales",
      role: "Sales Analyst",
      employmentStatus: "Active",
      attendance: "96.7%",
      checkedin: null, checkedout: null,
      payments: [
        { paymentId: "1904", value: 4912, dueDate: "2025-09-05", issueDate: "2025-06-12", status: "Paid" }
      ]
,

      payroll: {
        baseSalary: 5000,
        housingBenefits: 1000,
        transportationBenefits: 500,
        foodBenefits: 300,
        commissions: 1200,
        deductions: 600,
        netPay: 7000,

      },
      documents: ["ID", "Contract", "Market Analysis"],
      documentsDetails: [
        { title: "ID", type: "PDF", size: "87 KB", uploadedAt: "2025-01-06" },
        { title: "Contract", type: "PDF", size: "92 KB", uploadedAt: "2025-01-06" },
        { title: "Market Analysis", type: "JPG", size: "200 KB", uploadedAt: "2025-06-20" }
      ],
      requests: [
        { requestId: "70041", requestType: "training", startDate: "2025-09-01", endDate: "2025-09-03", reason: "Data analytics course", status: "Pending" }
      ]
    },
    {
      id: "21014",
      accountType: "user",
      profileImage: profileImage13,
      name: "Matz R. Carter",
      status: "disabled",
      firstName: "Matz",
      middleName: "R.",
      lastName: "Carter",
      email: "Matz.r.carter@company.com",
      phone: "+1-713-555-0162",
      address: "1600 Pennsylvania Ave NW, Washington, DC, USA",
      dateOfBirth: "1986-03-12",
      gender: "Male",
      hireDate: "2021-07-15",
      department: "Sales",
      role: "Territory Manager",
      employmentStatus: "Disabled",
      attendance: "75.3%",
      checkedin: "07:50", checkedout: null ,
      payments: [
        { paymentId: "3820", value: 8367, dueDate: "2025-08-29", issueDate: "2025-07-22", status: "Pending" }
      ]
,

      payroll: {
        baseSalary: 6200,
        housingBenefits: 1350,
        transportationBenefits: 700,
        foodBenefits: 380,
        commissions: 0,
        deductions: 1200,
        netPay: 8110,
      },
      documents: ["ID", "Contract"],
      documentsDetails: [
        { title: "ID", type: "JPG", size: "82 KB", uploadedAt: "2021-07-16" },
        { title: "Contract", type: "PDF", size: "86 KB", uploadedAt: "2021-07-16" }
      ],
      requests: [
        { requestId: "70051", requestType: "leave", startDate: "2023-12-10", endDate: "2023-12-20", reason: "Health recovery", status: "Approved" }
      ]
    }
  ],"HR Department": [
  {
    id: "30688",
    accountType: "admin",
    profileImage: profileImage05,
    name: "Sarah A. Keen",
    status: "active",
    firstName: "Sarah",
    middleName: "A.",
    lastName: "Keen",
    email: "sarah.a.keen@company.com",
    phone: "+966501112233",
    address: "King Salman Rd, Riyadh, KSA",
    dateOfBirth: "1985-10-05",
    gender: "Female",
    hireDate: "2022-05-10",
    department: "HR",
    role: "HR Manager",
    employmentStatus: "Active",
    attendance: "91.3%",
     checkedin: null, checkedout: null ,
     payments: [
       { paymentId: "1012", value: 7350, dueDate: "2025-07-24", issueDate: "2025-07-03", status: "Paid" },
      ],

    payroll: {
      baseSalary: 6800,
      housingBenefits: 1400,
      transportationBenefits: 700,
      foodBenefits: 400,
      commissions: 1000,
      deductions: 900,
      netPay: 9400,
    
    },
    documents: ["ID", "Contract"],
    documentsDetails: [
      {
        title: "ID",
        type: "PDF",
        size: "92 KB",
        uploadedAt: "2022-05-11"
      },
      {
        title: "Contract",
        type: "JPG",
        size: "95 KB",
        uploadedAt: "2022-05-11"
      }
    ],
    requests: [
      {
        requestId: "80012",
        requestType: "leave",
        startDate: "2025-09-01",
        endDate: "2025-09-10",
        reason: "Conference attendance",
        status: "Rejected"
      },
      {
        requestId: "80099",
        requestType: "resignation",
        startDate: "2026-01-01",
        endDate: "2026-01-31",
        reason: "Relocation",
        status: "Pending"
      },

      {
        requestId: "80155",
        requestType: "leave",
        startDate: "2025-11-05",
        reason: "Medical appointment",
        status: "Approved"
      }
    ]
  },

  {
    id: "30971",
    accountType: "user",
    profileImage: profileImage14,
    name: "Liam T. Read",
    status: "active",
    firstName: "Liam",
    middleName: "T.",
    lastName: "Reed",
    email: "liam.t.reed@company.com",
    phone: "+966502223344",
    address: "Dhahran Blvd, Dammam, KSA",
    dateOfBirth: "1992-02-17",
    gender: "Male",
    hireDate: "2024-03-01",
    department: "HR",
    role: "Recruiter",
    employmentStatus: "Active",
    attendance: "87.5%",
    checkedin: "06:45", checkedout: null,
    payments: [
      { paymentId: "6045", value: 6498, dueDate: "2025-09-12", issueDate: "2025-06-27", status: "Paid" },
    ],

    payroll: {
      baseSalary: 5000,
      housingBenefits: 1000,
      transportationBenefits: 500,
      foodBenefits: 300,
      commissions: 700,
      deductions: 600,
      netPay: 6900,

    },
    documents: ["ID", "Contract"],
    documentsDetails: [
      {
        title: "ID",
        type: "JPG",
        size: "88 KB",
        uploadedAt: "2024-03-02"
      },
      {
        title: "Contract",
        type: "PDF",
        size: "90 KB",
        uploadedAt: "2024-03-02"
      }
    ],
    requests: [
      {
        requestId: "81110",
        requestType: "leave",
        startDate: "2025-07-20",
        endDate: "2025-07-25",
        reason: "Family leave",
        status: "Approved"
      },
      {
        requestId: "82222",
        requestType: "resignation",
        startDate: "2026-04-01",
        endDate: "2026-04-30",
        reason: "Changing industries",
        status: "Pending"
      },
      {
        requestId: "56456",
        requestType: "resignation",
        startDate: "2026-04-30",
        reason: "Changing industries",
        status: "Pending"
      },
      {
        requestId: "83333",
        requestType: "leave",
        startDate: "2025-12-10",
        reason: "Training workshop",
        status: "Rejected"
      }
    ]
  },

  {
    id: "30124",
    accountType: "user",
    profileImage: profileImage06,
    name: "Ella N. Brooks",
    status: "active",
    firstName: "Ella",
    middleName: "N.",
    lastName: "Brooks",
    email: "ella.n.brooks@company.com",
    phone: "+966503334455",
    address: "Al Rawdah, Jeddah, KSA",
    dateOfBirth: "1990-06-08",
    gender: "Female",
    hireDate: "2023-08-12",
    department: "HR",
    role: "Compensation Analyst",
    employmentStatus: "Active",
    attendance: "90.1%",
     checkedin: null, checkedout: null,
     payments: [
       { paymentId: "8881", value: 3805, dueDate: "2025-08-11", issueDate: "2025-07-08", status: "Pending" },
      ],

    payroll: {
      baseSalary: 5200,
      housingBenefits: 1100,
      transportationBenefits: 550,
      foodBenefits: 350,
      commissions: 400,
      deductions: 500,
      netPay: 7100,

    },
    documents: ["ID", "Contract"],
    documentsDetails: [
      {
        title: "ID",
        type: "PDF",
        size: "87 KB",
        uploadedAt: "2023-08-13"
      },
      {
        title: "Contract",
        type: "JPG",
        size: "91 KB",
        uploadedAt: "2023-08-13"
      }
    ],
    requests: [
      {
        requestId: "84124",
        requestType: "leave",
        startDate: "2025-10-01",
        endDate: "2025-10-07",
        reason: "Personal reasons",
        status: "Approved"
      },
      {
        requestId: "85251",
        requestType: "resignation",
        startDate: "2026-06-01",
        endDate: "2026-06-30",
        reason: "Joining another firm",
        status: "Pending"
      },
      {
        requestId: "85251",
        requestType: "resignation",
        startDate: "2026-06-30",
        reason: "Joining another firm",
        status: "Pending"
      },
      {
        requestId: "86365",
        requestType: "leave",
        startDate: "2025-08-20",
        reason: "Sick leave",
        status: "Approved"
      }
    ]
  },

  {
    id: "30543",
    accountType: "user",
    profileImage: profileImage07,
    name: "Noah C. West",
    status: "inactive",
    firstName: "Noah",
    middleName: "C.",
    lastName: "West",
    email: "noah.c.west@company.com",
    phone: "+966504445566",
    address: "Industrial City, Jubail, KSA",
    dateOfBirth: "1995-01-29",
    gender: "Male",
    hireDate: "2022-02-01",
    department: "HR",
    role: "HR Assistant",
    employmentStatus: "Inactive",
    attendance: "78.4%",
     checkedin: "08:10", checkedout: "17:25",
     payments: [
       { paymentId: "3179", value: 9987, dueDate: "2025-07-20", issueDate: "2025-06-15", status: "Paid" },
      ],

    payroll: {
      baseSalary: 4000,
      housingBenefits: 900,
      transportationBenefits: 450,
      foodBenefits: 250,
      commissions: 0,
      deductions: 1000,
      netPay: 4600,
    },
    documents: ["ID"],
    documentsDetails: [
      {
        title: "ID",
        type: "JPG",
        size: "80 KB",
        uploadedAt: "2022-02-02"
      }
    ],
    requests: [
      {
        requestId: "87100",
        requestType: "leave",
        startDate: "2024-09-10",
        endDate: "2024-09-20",
        reason: "Family emergency",
        status: "Rejected"
      },
      {
        requestId: "88222",
        requestType: "resignation",
        startDate: "2025-04-01",
        endDate: "2025-04-30",
        reason: "Pursuing freelance work",
        status: "Approved"
      },
      {
        requestId: "54564",
        requestType: "resignation",
        startDate: "2025-04-30",
        reason: "Pursuing freelance work",
        status: "Approved"
      },
      {
        requestId: "89333",
        requestType: "leave",
        startDate: "2025-03-15",
        reason: "Relocation leave",
        status: "Rejected"
      }
    ]
  }
],
 "Finance Department": [
  {
    id: "40995",
    accountType: "admin",
    profileImage: profileImage08,
    name: "Olivia R. Stone",
    status: "active",
    firstName: "Olivia",
    middleName: "R.",
    lastName: "Stone",
    email: "olivia.r.stone@company.com",
    phone: "+966511223344",
    address: "King Abdullah St, Riyadh, KSA",
    dateOfBirth: "1987-08-19",
    gender: "Female",
    hireDate: "2021-04-15",
    department: "Finance",
    role: "Accountant",
    employmentStatus: "Active",
    attendance: "95.0%",
checkedin: null, checkedout: null,
payments: [
  { paymentId: "5290", value: 4723, dueDate: "2025-08-02", issueDate: "2025-07-31", status: "Pending" },
], 

    payroll: {
      baseSalary: 6000,
      housingBenefits: 1400,
      transportationBenefits: 600,
      foodBenefits: 350,
      commissions: 800,
      deductions: 900,
      netPay: 8550,
    },
    documents: ["ID", "Contract"],
    documentsDetails: [
      {
        title: "ID",
        type: "PDF",
        size: "93 KB",
        uploadedAt: "2021-04-16"
      },
      {
        title: "Contract",
        type: "PDF",
        size: "96 KB",
        uploadedAt: "2021-04-16"
      }
    ],
    requests: [
      {
        requestId: "90123",
        requestType: "leave",
        startDate: "2025-08-10",
        endDate: "2025-08-18",
        reason: "Family vacation",
        status: "Approved"
      },
      {
        requestId: "91234",
        requestType: "resignation",
        startDate: "2026-05-01",
        endDate: "2026-05-31",
        reason: "MBA program",
        status: "Pending"
      },
      {
        requestId: "56555",
        requestType: "resignation",
        startDate: "2026-05-31",
        reason: "MBA program",
        status: "Pending"
      },
      {
        requestId: "92345",
        requestType: "leave",
        startDate: "2025-11-15",
        reason: "Medical leave",
        status: "Approved"
      }
    ]
  },

  {
    id: "40318",
    accountType: "user",
    profileImage: profileImage15,
    name: "James L. Park",
    status: "active",
    firstName: "James",
    middleName: "L.",
    lastName: "Park",
    email: "james.l.park@company.com",
    phone: "+966522334455",
    address: "King Fahd Rd, Jeddah, KSA",
    dateOfBirth: "1990-12-02",
    gender: "Male",
    hireDate: "2022-07-20",
    department: "Finance",
    role: "Financial Analyst",
    employmentStatus: "Active",
    attendance: "88.0%",
     checkedin: "09:00", checkedout: "18:00" ,
     payments: [
       { paymentId: "1876", value: 6134, dueDate: "2025-09-03", issueDate: "2025-06-21", status: "Paid" },
      ],

    payroll: {
      baseSalary: 5500,
      housingBenefits: 1200,
      transportationBenefits: 550,
      foodBenefits: 300,
      commissions: 1200,
      deductions: 700,
      netPay: 7550,
    },
    documents: ["ID", "Contract"],
    documentsDetails: [
      {
        title: "ID",
        type: "JPG",
        size: "89 KB",
        uploadedAt: "2022-07-21"
      },
      {
        title: "Contract",
        type: "PDF",
        size: "92 KB",
        uploadedAt: "2022-07-21"
      }
    ],
    requests: [
      {
        requestId: "93456",
        requestType: "leave",
        startDate: "2025-09-05",
        endDate: "2025-09-12",
        reason: "Training course",
        status: "Rejected"
      },
      {
        requestId: "94567",
        requestType: "resignation",
        startDate: "2026-07-01",
        endDate: "2026-07-31",
        reason: "Career pivot",
        status: "Pending"
      },

      {
        requestId: "95678",
        requestType: "leave",
        startDate: "2025-12-01",
        reason: "Year-end break",
        status: "Approved"
      }
    ]
  },

  {
    id: "40746",
    accountType: "user",
    profileImage: profileImage09,
    name: "Sophia N. Lane",
    status: "active",
    firstName: "Sophia",
    middleName: "N.",
    lastName: "Lane",
    email: "sophia.n.lane@company.com",
    phone: "+966533445566",
    address: "Abdullah Al-Salem St, Dammam, KSA",
    dateOfBirth: "1989-03-22",
    gender: "Female",
    hireDate: "2023-02-10",
    department: "Finance",
    role: "Auditor",
    employmentStatus: "Active",
    attendance: "92.5%",
     checkedin: null, checkedout: null ,
     payments: [
       { paymentId: "7402", value: 7911, dueDate: "2025-07-28", issueDate: "2025-07-05", status: "Paid" },
      ],

    payroll: {
      baseSalary: 5800,
      housingBenefits: 1300,
      transportationBenefits: 600,
      foodBenefits: 350,
      commissions: 500,
      deductions: 650,
      netPay: 9400,
    },
    documents: ["ID", "Contract"],
    documentsDetails: [
      {
        title: "ID",
        type: "PDF",
        size: "90 KB",
        uploadedAt: "2023-02-11"
      },
      {
        title: "Contract",
        type: "JPG",
        size: "93 KB",
        uploadedAt: "2023-02-11"
      }
    ],
    requests: [
      {
        requestId: "96789",
        requestType: "leave",
        startDate: "2025-10-15",
        endDate: "2025-10-22",
        reason: "Workshop",
        status: "Approved"
      },
      {
        requestId: "97890",
        requestType: "resignation",
        startDate: "2026-09-01",
        endDate: "2026-09-30",
        reason: "Further certification",
        status: "Pending"
      },

      {
        requestId: "98901",
        requestType: "leave",
        startDate: "2025-11-25",
        reason: "Medical leave",
        status: "Rejected"
      }
    ]
  },

  {
    id: "40210",
    accountType: "user",
    profileImage: profileImage16,
    name: "Ethan W. Miles",
    status: "disabled",
    firstName: "Ethan",
    middleName: "W.",
    lastName: "Miles",
    email: "ethan.w.miles@company.com",
    phone: "+966544556677",
    address: "Prince Sultan St, Riyadh, KSA",
    dateOfBirth: "1985-06-14",
    gender: "Male",
    hireDate: "2020-10-05",
    department: "Finance",
    role: "Payroll Officer",
    employmentStatus: "Disabled",
    attendance: "70.0%",
    checkedin: "08:50", checkedout: null,
    payments: [
      { paymentId: "5298", value: 8456, dueDate: "2025-08-15", issueDate: "2025-06-19", status: "Pending" },
    ],

    payroll: {
      baseSalary: 5300,
      housingBenefits: 1200,
      transportationBenefits: 550,
      foodBenefits: 300,
      commissions: 0,
      deductions: 1300,
      netPay: 6050,
    },
    documents: ["Contract"],
    documentsDetails: [
      {
        title: "Contract",
        type: "PDF",
        size: "88 KB",
        uploadedAt: "2020-10-06"
      }
    ],
    requests: [
      {
        requestId: "90012",
        requestType: "leave",
        startDate: "2024-11-01",
        endDate: "2024-11-10",
        reason: "Health recovery",
        status: "Approved"
      },
      {
        requestId: "91023",
        requestType: "resignation",
        startDate: "2025-03-01",
        endDate: "2025-03-31",
        reason: "Retirement",
        status: "Approved"
      },

      {
        requestId: "92034",
        requestType: "leave",
        startDate: "2025-02-15",
        reason: "Personal leave",
        status: "Approved"
      }
    ]
  }
],
"Marketing Department": [
  {
    id: "50677",
    accountType: "admin",
    profileImage: profileImage17,
    name: "Ava L. Green",
    status: "active",
    firstName: "Ava",
    middleName: "L.",
    lastName: "Green",
    email: "ava.l.green@company.com",
    phone: "+966555667788",
    address: "Prince Sultan Blvd, Riyadh, KSA",
    dateOfBirth: "1986-02-14",
    gender: "Female",
    hireDate: "2021-06-01",
    department: "Marketing",
    role: "Marketing Manager",
    employmentStatus: "Active",
    attendance: "97.0%",
    checkedin: null, checkedout: null,
    payments: [
      { paymentId: "0675", value: 3120, dueDate: "2025-09-16", issueDate: "2025-07-11", status: "Paid" },
    ],

    payroll: {
      baseSalary: 6500,
      housingBenefits: 1450,
      transportationBenefits: 650,
      foodBenefits: 400,
      commissions: 1200,
      deductions: 850,
      netPay: 9550,
    },
    documents: ["ID", "Contract"],
    documentsDetails: [
      {
        title: "ID",
        type: "PDF",
        size: "94 KB",
        uploadedAt: "2021-06-02"
      },
      {
        title: "Contract",
        type: "JPG",
        size: "97 KB",
        uploadedAt: "2021-06-02"
      }
    ],
    requests: [
      {
        requestId: "100123",
        requestType: "leave",
        startDate: "2025-08-05",
        endDate: "2025-08-12",
        reason: "Annual retreat",
        status: "Approved"
      },
      {
        requestId: "101234",
        requestType: "resignation",
        startDate: "2026-03-01",
        endDate: "2026-03-31",
        reason: "Relocation",
        status: "Pending"
      },

      {
        requestId: "102345",
        requestType: "leave",
        startDate: "2025-11-20",
        reason: "Medical leave",
        status: "Rejected"
      }
    ]
  },

  {
    id: "50488",
    accountType: "user",
    profileImage: profileImage20,
    name: "Lucas D. Bell",
    status: "active",
    firstName: "Lucas",
    middleName: "D.",
    lastName: "Bell",
    email: "lucas.d.bell@company.com",
    phone: "+966556778899",
    address: "King Fahd Rd, Dammam, KSA",
    dateOfBirth: "1993-09-03",
    gender: "Male",
    hireDate: "2022-11-15",
    department: "Marketing",
    role: "SEO Specialist",
    employmentStatus: "Active",
    attendance: "84.0%",
    checkedin: "06:30", checkedout: null ,
    payments: [
      { paymentId: "2150", value: 7789, dueDate: "2025-07-23", issueDate: "2025-07-26", status: "Pending" },
    ],

    payroll: {
      baseSalary: 4800,
      housingBenefits: 1100,
      transportationBenefits: 550,
      foodBenefits: 300,
      commissions: 500,
      deductions: 700,
      netPay: 6550,
    },
    documents: ["ID", "Contract"],
    documentsDetails: [
      {
        title: "ID",
        type: "PDF",
        size: "90 KB",
        uploadedAt: "2022-11-16"
      },
      {
        title: "Contract",
        type: "PDF",
        size: "93 KB",
        uploadedAt: "2022-11-16"
      }
    ],
    requests: [
      {
        requestId: "103456",
        requestType: "leave",
        startDate: "2025-09-15",
        endDate: "2025-09-22",
        reason: "Training",
        status: "Rejected"
      },
      {
        requestId: "104567",
        requestType: "resignation",
        startDate: "2026-05-01",
        endDate: "2026-05-31",
        reason: "Further studies",
        status: "Pending"
      },

      {
        requestId: "105678",
        requestType: "leave",
        startDate: "2025-12-05",
        endDate: "2025-09-22",
        reason: "Year-end break",
        status: "Approved"
      }
    ]
  },

  {
    id: "50923",
    accountType: "user",
    profileImage: profileImage10,
    name: "Mia S. Ford",
    status: "active",
    firstName: "Mia",
    middleName: "S.",
    lastName: "Ford",
    email: "mia.s.ford@company.com",
    phone: "+966557889900",
    address: "Al Khobar Corniche, KSA",
    dateOfBirth: "1994-12-21",
    gender: "Female",
    hireDate: "2023-03-20",
    department: "Marketing",
    role: "Content Creator",
    employmentStatus: "Active",
    attendance: "86.2%",
    checkedin: null, checkedout: null,
    payments: [
      { paymentId: "3831", value: 6022, dueDate: "2025-08-20", issueDate: "2025-07-07", status: "Pending" },
    ],

    payroll: {
      baseSalary: 5000,
      housingBenefits: 1200,
      transportationBenefits: 600,
      foodBenefits: 350,
      commissions: 600,
      deductions: 650,
      netPay: 8600,
    },
    documents: ["ID", "Contract"],
    documentsDetails: [
      {
        title: "ID",
        type: "PDF",
        size: "88 KB",
        uploadedAt: "2023-03-21"
      },
      {
        title: "Contract",
        type: "JPG",
        size: "91 KB",
        uploadedAt: "2023-03-21"
      }
    ],
    requests: [
      {
        requestId: "106789",
        requestType: "leave",
        startDate: "2025-07-25",
        endDate: "2025-08-01",
        reason: "Festival break",
        status: "Rejected"
      },
      {
        requestId: "107890",
        requestType: "resignation",
        startDate: "2026-07-01",
        endDate: "2026-07-31",
        reason: "New opportunity",
        status: "Pending"
      },

      {
        requestId: "108901",
        requestType: "leave",
        startDate: "2025-11-30",
        reason: "Medical leave",
        status: "Rejected"
      }
    ]
  },

  {
    id: "50136",
    accountType: "user",
    profileImage: profileImage19,
    name: "Logan P. Hill",
    status: "inactive",
    firstName: "Logan",
    middleName: "P.",
    lastName: "Hill",
    email: "logan.p.hill@company.com",
    phone: "+966558990011",
    address: "Olaya District, Riyadh, KSA",
    dateOfBirth: "1984-11-11",
    gender: "Male",
    hireDate: "2019-10-10",
    department: "Marketing",
    role: "Social Media Manager",
    employmentStatus: "Inactive",
    attendance: "73.5%",
    checkedin: "09:10", checkedout: null,
    payments: [
      { paymentId: "1311", value: 3064, dueDate: "2025-08-17", issueDate: "2025-06-24", status: "Paid" },
    ],

    payroll: {
      baseSalary: 5200,
      housingBenefits: 1300,
      transportationBenefits: 650,
      foodBenefits: 350,
      commissions: 0,
      deductions: 1200,
      netPay: 6300,
    },
    documents: ["Contract"],
    documentsDetails: [
      {
        title: "Contract",
        type: "PDF",
        size: "89 KB",
        uploadedAt: "2019-10-11"
      }
    ],
    requests: [
      {
        requestId: "109012",
        requestType: "leave",
        startDate: "2024-08-01",
        endDate: "2024-08-10",
        reason: "Health recovery",
        status: "Approved"
      },
      {
        requestId: "110123",
        requestType: "resignation",
        startDate: "2024-12-01",
        endDate: "2024-12-31",
        reason: "Retirement",
        status: "Rejected"
      },

      {
        requestId: "111234",
        requestType: "leave",
        startDate: "2025-06-15",
        reason: "Family care",
        status: "Approved"
      }
    ]
  }
]

}

  
  

    
    

