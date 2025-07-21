import profileImage from "../assets/profileImage.png" 
import profileImage02 from "../assets/profileImage02.png" 

export const accounts =  {

  "admin": 
  
  {
    id: "45467",
    accountType: "admin" ,
    ProfileImage: profileImage,
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
        paymentStatus: "Paid",
        paymentDate: "2025-12-15"
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
    requests: 
        [
          {
            requestId: "45874",
            requestType: "leave",
            startDate: "2025-08-15",
            endDate: "2025-09-15",
            reason: "The employee is .....",
            screenLefttatus: "Approved"
          },
          {
            requestId: "46546",
            requestType: "resignation",
            startDate: "2025-08-15",
            endDate: "2025-09-15",
            reason: "The employee is .....",
            screenLefttatus: "pending"
          },
          {
            requestId: "45874",
            requestType: "resignation",
            date: "2025-09-15",
            reason: "The employee is .....",
            status: "Approved"
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
    ProfileImage: profileImage02,
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
        paymentStatus: "Paid",
        paymentDate: "2025-12-15"
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
            screenLefttatus: "Approved"
          },
          {
            requestId: "46546",
            startDate: "2025-08-15",
            endDate: "2025-09-15",
            reason: "The employee is .....",
            screenLefttatus: "pending"
          },
        ],
        resignation:[
          {
            requestId: "45874",
            date: "2025-09-15",
            reason: "The employee is .....",
            status: "Approved"
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
    id: "10837",
    accountType: "admin",
    ProfileImage: profileImage,
    name: "Neo B. Arel",
    status: "active",
    firstName: "Neo",
    middleName: "B.",
    lastName: "Arel",
    email: "neo.b.arel@company.com",
    password: "XJH47KPL92MNB3QW8RTY",
    phone: "+966512345678",
    address: "28th St, Dammam, KSA",
    dateOfBirth: "1996-01-26",
    gender: "Female",
    hireDate: "2025-03-22",
    department: "IT",
    role: "Software Engineer",
    employmentStatus: "Active",
    attendance: "99.2%",
    payroll: {
      baseSalary: 5000,
      housingBenefits: 1200,
      transportationBenefits: 600,
      foodBenefits: 350,
      commissions: 1500,
      deductions: 800,
      netPay: 7650,
      paymentStatus: "Paid",
      paymentDate: "2025-07-15"
    },
    documents: ["ID", "Contract"],
    documentsDetails: [
      {
        title: "ID",
        type: "PDF",
        size: "85 KB",
        uploadedAt: "2025-02-06"
      },
      {
        title: "Contract",
        type: "PDF",
        size: "88 KB",
        uploadedAt: "2025-02-06"
      }
    ],
    requests: [
      {
        requestId: "45874",
        requestType: "leave",
        startDate: "2025-08-15",
        endDate: "2025-09-15",
        reason: "Family vacation",
        screenLefttatus: "Approved"
      },
      {
        requestId: "46546",
        requestType: "resignation",
        startDate: "2025-12-01",
        endDate: "2025-12-31",
        reason: "Pursuing higher studies",
        screenLefttatus: "Pending"
      },
      {
        requestId: "47211",
        requestType: "resignation",
        date: "2025-12-31",
        reason: "End of contract",
        status: "Approved"
      },
      {
        requestId: "65465",
        requestType: "leave",
        date: "2025-11-20",
        reason: "Medical leave",
        status: "Approved"
      }
    ]
  },

  {
    id: "10492",
    accountType: "user",
    ProfileImage: profileImage,
    name: "John K. Mann",
    status: "active",
    firstName: "John",
    middleName: "K.",
    lastName: "Mann",
    email: "john.k.mann@company.com",
    password: "PLM09ZXCV56BBG4TYHJU",
    phone: "+966523456789",
    address: "15th Ave, Riyadh, KSA",
    dateOfBirth: "1990-07-14",
    gender: "Male",
    hireDate: "2024-11-05",
    department: "IT",
    role: "IT Support Engineer",
    employmentStatus: "Active",
    attendance: "85.0%",
    payroll: {
      baseSalary: 4200,
      housingBenefits: 900,
      transportationBenefits: 450,
      foodBenefits: 300,
      commissions: 200,
      deductions: 600,
      netPay: 5450,
      paymentStatus: "Paid",
      paymentDate: "2025-07-15"
    },
    documents: ["ID", "Contract"],
    documentsDetails: [
      {
        title: "ID",
        type: "PDF",
        size: "90 KB",
        uploadedAt: "2024-11-06"
      },
      {
        title: "Contract",
        type: "PDF",
        size: "92 KB",
        uploadedAt: "2024-11-06"
      }
    ],
    requests: [
      {
        requestId: "48123",
        requestType: "leave",
        startDate: "2025-05-10",
        endDate: "2025-05-20",
        reason: "Wedding",
        screenLefttatus: "Approved"
      },
      {
        requestId: "49210",
        requestType: "resignation",
        startDate: "2026-01-01",
        endDate: "2026-01-31",
        reason: "Relocation",
        screenLefttatus: "Pending"
      },
      {
        requestId: "49210",
        requestType: "resignation",
        date: "2026-01-31",
        reason: "Relocation",
        status: "Pending"
      },
      {
        requestId: "50333",
        requestType: "leave",
        date: "2025-10-05",
        reason: "Conference",
        status: "Approved"
      }
    ]
  },

  {
    id: "10941",
    accountType: "user",
    ProfileImage: profileImage,
    name: "Dane L. Will",
    status: "active",
    firstName: "Dane",
    middleName: "L.",
    lastName: "Will",
    email: "dane.l.will@company.com",
    password: "QWE12ASDF34ZXCV5TYUI",
    phone: "+966534567890",
    address: "King St, Jeddah, KSA",
    dateOfBirth: "1992-03-08",
    gender: "Male",
    hireDate: "2025-01-20",
    department: "IT",
    role: "QA Engineer",
    employmentStatus: "Active",
    attendance: "88.5%",
    payroll: {
      baseSalary: 4800,
      housingBenefits: 1100,
      transportationBenefits: 550,
      foodBenefits: 300,
      commissions: 400,
      deductions: 700,
      netPay: 7150,
      paymentStatus: "Paid",
      paymentDate: "2025-07-15"
    },
    documents: ["ID", "Contract"],
    documentsDetails: [
      {
        title: "ID",
        type: "PDF",
        size: "87 KB",
        uploadedAt: "2025-01-21"
      },
      {
        title: "Contract",
        type: "PDF",
        size: "90 KB",
        uploadedAt: "2025-01-21"
      }
    ],
    requests: [
      {
        requestId: "51234",
        requestType: "leave",
        startDate: "2025-07-30",
        endDate: "2025-08-10",
        reason: "Family emergency",
        screenLefttatus: "Approved"
      },
      {
        requestId: "52222",
        requestType: "resignation",
        startDate: "2025-12-15",
        endDate: "2026-01-15",
        reason: "Career change",
        screenLefttatus: "Pending"
      },
      {
        requestId: "52222",
        requestType: "resignation",
        date: "2026-01-15",
        reason: "Career change",
        status: "Pending"
      },
      {
        requestId: "53321",
        requestType: "leave",
        date: "2025-09-01",
        reason: "Vacation",
        status: "Approved"
      }
    ]
  },

  {
    id: "10275",
    accountType: "user",
    ProfileImage: profileImage,
    name: "Matt J. Arel",
    status: "disabled",
    firstName: "Matt",
    middleName: "J.",
    lastName: "Arel",
    email: "matt.j.arel@company.com",
    password: "MNB78VFRT65TYUH2IKLO",
    phone: "+966545678901",
    address: "Kingdom Rd, Riyadh, KSA",
    dateOfBirth: "1988-11-02",
    gender: "Male",
    hireDate: "2023-06-10",
    department: "IT",
    role: "Network Engineer",
    employmentStatus: "Disabled",
    attendance: "72.06%",
    payroll: {
      baseSalary: 5300,
      housingBenefits: 1300,
      transportationBenefits: 650,
      foodBenefits: 400,
      commissions: 0,
      deductions: 1200,
      netPay: 6450,
      paymentStatus: "Paid",
      paymentDate: "2025-07-15"
    },
    documents: ["ID", "Contract"],
    documentsDetails: [
      {
        title: "ID",
        type: "PDF",
        size: "82 KB",
        uploadedAt: "2023-06-11"
      },
      {
        title: "Contract",
        type: "PDF",
        size: "85 KB",
        uploadedAt: "2023-06-11"
      }
    ],
    requests: [
      {
        requestId: "54210",
        requestType: "leave",
        startDate: "2024-12-01",
        endDate: "2024-12-15",
        reason: "Sabbatical",
        screenLefttatus: "Approved"
      },
      {
        requestId: "55222",
        requestType: "resignation",
        startDate: "2025-02-01",
        endDate: "2025-02-28",
        reason: "Personal reasons",
        screenLefttatus: "Pending"
      },
      {
        requestId: "55222",
        requestType: "resignation",
        date: "2025-02-28",
        reason: "Personal reasons",
        status: "Pending"
      },
      {
        requestId: "56333",
        requestType: "leave",
        date: "2025-03-10",
        reason: "Medical",
        status: "Approved"
      }
    ]
  }
],
"Sales Department":  [
  {
    id: "10837",
    accountType: "admin",
    ProfileImage: profileImage,
    name: "Neo B. Arel",
    status: "active",
    firstName: "Neo",
    middleName: "B.",
    lastName: "Arel",
    email: "neo.b.arel@company.com",
    password: "XJH47KPL92MNB3QW8RTY",
    phone: "+966512345678",
    address: "28th St, Dammam, KSA",
    dateOfBirth: "1996-01-26",
    gender: "Female",
    hireDate: "2025-03-22",
    department: "IT",
    role: "Software Engineer",
    employmentStatus: "Active",
    attendance: "99.2%",
    payroll: {
      baseSalary: 5000,
      housingBenefits: 1200,
      transportationBenefits: 600,
      foodBenefits: 350,
      commissions: 1500,
      deductions: 800,
      netPay: 7650,
      paymentStatus: "Paid",
      paymentDate: "2025-07-15"
    },
    documents: ["ID", "Contract"],
    documentsDetails: [
      {
        title: "ID",
        type: "PDF",
        size: "85 KB",
        uploadedAt: "2025-02-06"
      },
      {
        title: "Contract",
        type: "PDF",
        size: "88 KB",
        uploadedAt: "2025-02-06"
      }
    ],
    requests: [
      {
        requestId: "45874",
        requestType: "leave",
        startDate: "2025-08-15",
        endDate: "2025-09-15",
        reason: "Family vacation",
        screenLefttatus: "Approved"
      },
      {
        requestId: "46546",
        requestType: "resignation",
        startDate: "2025-12-01",
        endDate: "2025-12-31",
        reason: "Pursuing higher studies",
        screenLefttatus: "Pending"
      },
      {
        requestId: "47211",
        requestType: "resignation",
        date: "2025-12-31",
        reason: "End of contract",
        status: "Approved"
      },
      {
        requestId: "65465",
        requestType: "leave",
        date: "2025-11-20",
        reason: "Medical leave",
        status: "Approved"
      }
    ]
  },

  {
    id: "10492",
    accountType: "user",
    ProfileImage: profileImage,
    name: "John K. Mann",
    status: "active",
    firstName: "John",
    middleName: "K.",
    lastName: "Mann",
    email: "john.k.mann@company.com",
    password: "PLM09ZXCV56BBG4TYHJU",
    phone: "+966523456789",
    address: "15th Ave, Riyadh, KSA",
    dateOfBirth: "1990-07-14",
    gender: "Male",
    hireDate: "2024-11-05",
    department: "IT",
    role: "IT Support Engineer",
    employmentStatus: "Active",
    attendance: "85.0%",
    payroll: {
      baseSalary: 4200,
      housingBenefits: 900,
      transportationBenefits: 450,
      foodBenefits: 300,
      commissions: 200,
      deductions: 600,
      netPay: 5450,
      paymentStatus: "Paid",
      paymentDate: "2025-07-15"
    },
    documents: ["ID", "Contract"],
    documentsDetails: [
      {
        title: "ID",
        type: "PDF",
        size: "90 KB",
        uploadedAt: "2024-11-06"
      },
      {
        title: "Contract",
        type: "PDF",
        size: "92 KB",
        uploadedAt: "2024-11-06"
      }
    ],
    requests: [
      {
        requestId: "48123",
        requestType: "leave",
        startDate: "2025-05-10",
        endDate: "2025-05-20",
        reason: "Wedding",
        screenLefttatus: "Approved"
      },
      {
        requestId: "49210",
        requestType: "resignation",
        startDate: "2026-01-01",
        endDate: "2026-01-31",
        reason: "Relocation",
        screenLefttatus: "Pending"
      },
      {
        requestId: "49210",
        requestType: "resignation",
        date: "2026-01-31",
        reason: "Relocation",
        status: "Pending"
      },
      {
        requestId: "50333",
        requestType: "leave",
        date: "2025-10-05",
        reason: "Conference",
        status: "Approved"
      }
    ]
  },

  {
    id: "10941",
    accountType: "user",
    ProfileImage: profileImage,
    name: "Dane L. Will",
    status: "active",
    firstName: "Dane",
    middleName: "L.",
    lastName: "Will",
    email: "dane.l.will@company.com",
    password: "QWE12ASDF34ZXCV5TYUI",
    phone: "+966534567890",
    address: "King St, Jeddah, KSA",
    dateOfBirth: "1992-03-08",
    gender: "Male",
    hireDate: "2025-01-20",
    department: "IT",
    role: "QA Engineer",
    employmentStatus: "Active",
    attendance: "88.5%",
    payroll: {
      baseSalary: 4800,
      housingBenefits: 1100,
      transportationBenefits: 550,
      foodBenefits: 300,
      commissions: 400,
      deductions: 700,
      netPay: 7150,
      paymentStatus: "Paid",
      paymentDate: "2025-07-15"
    },
    documents: ["ID", "Contract"],
    documentsDetails: [
      {
        title: "ID",
        type: "PDF",
        size: "87 KB",
        uploadedAt: "2025-01-21"
      },
      {
        title: "Contract",
        type: "PDF",
        size: "90 KB",
        uploadedAt: "2025-01-21"
      }
    ],
    requests: [
      {
        requestId: "51234",
        requestType: "leave",
        startDate: "2025-07-30",
        endDate: "2025-08-10",
        reason: "Family emergency",
        screenLefttatus: "Approved"
      },
      {
        requestId: "52222",
        requestType: "resignation",
        startDate: "2025-12-15",
        endDate: "2026-01-15",
        reason: "Career change",
        screenLefttatus: "Pending"
      },
      {
        requestId: "52222",
        requestType: "resignation",
        date: "2026-01-15",
        reason: "Career change",
        status: "Pending"
      },
      {
        requestId: "53321",
        requestType: "leave",
        date: "2025-09-01",
        reason: "Vacation",
        status: "Approved"
      }
    ]
  },

  {
    id: "10275",
    accountType: "user",
    ProfileImage: profileImage,
    name: "Matt J. Arel",
    status: "disabled",
    firstName: "Matt",
    middleName: "J.",
    lastName: "Arel",
    email: "matt.j.arel@company.com",
    password: "MNB78VFRT65TYUH2IKLO",
    phone: "+966545678901",
    address: "Kingdom Rd, Riyadh, KSA",
    dateOfBirth: "1988-11-02",
    gender: "Male",
    hireDate: "2023-06-10",
    department: "IT",
    role: "Network Engineer",
    employmentStatus: "Disabled",
    attendance: "72.06%",
    payroll: {
      baseSalary: 5300,
      housingBenefits: 1300,
      transportationBenefits: 650,
      foodBenefits: 400,
      commissions: 0,
      deductions: 1200,
      netPay: 6450,
      paymentStatus: "Paid",
      paymentDate: "2025-07-15"
    },
    documents: ["ID", "Contract"],
    documentsDetails: [
      {
        title: "ID",
        type: "PDF",
        size: "82 KB",
        uploadedAt: "2023-06-11"
      },
      {
        title: "Contract",
        type: "PDF",
        size: "85 KB",
        uploadedAt: "2023-06-11"
      }
    ],
    requests: [
      {
        requestId: "54210",
        requestType: "leave",
        startDate: "2024-12-01",
        endDate: "2024-12-15",
        reason: "Sabbatical",
        screenLefttatus: "Approved"
      },
      {
        requestId: "55222",
        requestType: "resignation",
        startDate: "2025-02-01",
        endDate: "2025-02-28",
        reason: "Personal reasons",
        screenLefttatus: "Pending"
      },
      {
        requestId: "55222",
        requestType: "resignation",
        date: "2025-02-28",
        reason: "Personal reasons",
        status: "Pending"
      },
      {
        requestId: "56333",
        requestType: "leave",
        date: "2025-03-10",
        reason: "Medical",
        status: "Approved"
      }
    ]
  }
],"HR Department": [
  {
    id: "30688",
    accountType: "admin",
    ProfileImage: profileImage,
    name: "Sarah A. Keen",
    status: "active",
    firstName: "Sarah",
    middleName: "A.",
    lastName: "Keen",
    email: "sarah.a.keen@company.com",
    password: "HRMGR88LOP78UJHY65RF",
    phone: "+966501112233",
    address: "King Salman Rd, Riyadh, KSA",
    dateOfBirth: "1985-10-05",
    gender: "Female",
    hireDate: "2022-05-10",
    department: "HR",
    role: "HR Manager",
    employmentStatus: "Active",
    attendance: "91.3%",
    payroll: {
      baseSalary: 6800,
      housingBenefits: 1400,
      transportationBenefits: 700,
      foodBenefits: 400,
      commissions: 1000,
      deductions: 900,
      netPay: 9400,
      paymentStatus: "Paid",
      paymentDate: "2025-07-15"
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
        type: "PDF",
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
        screenLefttatus: "Approved"
      },
      {
        requestId: "80099",
        requestType: "resignation",
        startDate: "2026-01-01",
        endDate: "2026-01-31",
        reason: "Relocation",
        screenLefttatus: "Pending"
      },
      {
        requestId: "80099",
        requestType: "resignation",
        date: "2026-01-31",
        reason: "Relocation",
        status: "Pending"
      },
      {
        requestId: "80155",
        requestType: "leave",
        date: "2025-11-05",
        reason: "Medical appointment",
        status: "Approved"
      }
    ]
  },

  {
    id: "30971",
    accountType: "user",
    ProfileImage: profileImage,
    name: "Liam T. Read",
    status: "active",
    firstName: "Liam",
    middleName: "T.",
    lastName: "Reed",
    email: "liam.t.reed@company.com",
    password: "HRRCRT56VBN78ASDF12QW",
    phone: "+966502223344",
    address: "Dhahran Blvd, Dammam, KSA",
    dateOfBirth: "1992-02-17",
    gender: "Male",
    hireDate: "2024-03-01",
    department: "HR",
    role: "Recruiter",
    employmentStatus: "Active",
    attendance: "87.5%",
    payroll: {
      baseSalary: 5000,
      housingBenefits: 1000,
      transportationBenefits: 500,
      foodBenefits: 300,
      commissions: 700,
      deductions: 600,
      netPay: 6900,
      paymentStatus: "Paid",
      paymentDate: "2025-07-15"
    },
    documents: ["ID", "Contract"],
    documentsDetails: [
      {
        title: "ID",
        type: "PDF",
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
        screenLefttatus: "Approved"
      },
      {
        requestId: "82222",
        requestType: "resignation",
        startDate: "2026-04-01",
        endDate: "2026-04-30",
        reason: "Changing industries",
        screenLefttatus: "Pending"
      },
      {
        requestId: "82222",
        requestType: "resignation",
        date: "2026-04-30",
        reason: "Changing industries",
        status: "Pending"
      },
      {
        requestId: "83333",
        requestType: "leave",
        date: "2025-12-10",
        reason: "Training workshop",
        status: "Approved"
      }
    ]
  },

  {
    id: "30124",
    accountType: "user",
    ProfileImage: profileImage,
    name: "Ella N. Brooks",
    status: "active",
    firstName: "Ella",
    middleName: "N.",
    lastName: "Brooks",
    email: "ella.n.brooks@company.com",
    password: "HRCMP1234ZXCVBNMLKJ",
    phone: "+966503334455",
    address: "Al Rawdah, Jeddah, KSA",
    dateOfBirth: "1990-06-08",
    gender: "Female",
    hireDate: "2023-08-12",
    department: "HR",
    role: "Compensation Analyst",
    employmentStatus: "Active",
    attendance: "90.1%",
    payroll: {
      baseSalary: 5200,
      housingBenefits: 1100,
      transportationBenefits: 550,
      foodBenefits: 350,
      commissions: 400,
      deductions: 500,
      netPay: 7100,
      paymentStatus: "Paid",
      paymentDate: "2025-07-15"
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
        type: "PDF",
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
        screenLefttatus: "Approved"
      },
      {
        requestId: "85251",
        requestType: "resignation",
        startDate: "2026-06-01",
        endDate: "2026-06-30",
        reason: "Joining another firm",
        screenLefttatus: "Pending"
      },
      {
        requestId: "85251",
        requestType: "resignation",
        date: "2026-06-30",
        reason: "Joining another firm",
        status: "Pending"
      },
      {
        requestId: "86365",
        requestType: "leave",
        date: "2025-08-20",
        reason: "Sick leave",
        status: "Approved"
      }
    ]
  },

  {
    id: "30543",
    accountType: "user",
    ProfileImage: profileImage,
    name: "Noah C. West",
    status: "inactive",
    firstName: "Noah",
    middleName: "C.",
    lastName: "West",
    email: "noah.c.west@company.com",
    password: "HRAST9876ASDFRTYUJK",
    phone: "+966504445566",
    address: "Industrial City, Jubail, KSA",
    dateOfBirth: "1995-01-29",
    gender: "Male",
    hireDate: "2022-02-01",
    department: "HR",
    role: "HR Assistant",
    employmentStatus: "Inactive",
    attendance: "78.4%",
    payroll: {
      baseSalary: 4000,
      housingBenefits: 900,
      transportationBenefits: 450,
      foodBenefits: 250,
      commissions: 0,
      deductions: 1000,
      netPay: 4600,
      paymentStatus: "Paid",
      paymentDate: "2025-07-15"
    },
    documents: ["ID"],
    documentsDetails: [
      {
        title: "ID",
        type: "PDF",
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
        screenLefttatus: "Approved"
      },
      {
        requestId: "88222",
        requestType: "resignation",
        startDate: "2025-04-01",
        endDate: "2025-04-30",
        reason: "Pursuing freelance work",
        screenLefttatus: "Approved"
      },
      {
        requestId: "88222",
        requestType: "resignation",
        date: "2025-04-30",
        reason: "Pursuing freelance work",
        status: "Approved"
      },
      {
        requestId: "89333",
        requestType: "leave",
        date: "2025-03-15",
        reason: "Relocation leave",
        status: "Approved"
      }
    ]
  }
],
 "Finance Department": [
  {
    id: "40995",
    accountType: "admin",
    ProfileImage: profileImage,
    name: "Olivia R. Stone",
    status: "active",
    firstName: "Olivia",
    middleName: "R.",
    lastName: "Stone",
    email: "olivia.r.stone@company.com",
    password: "ACCT99JKL56MNB3QWE7TY",
    phone: "+966511223344",
    address: "King Abdullah St, Riyadh, KSA",
    dateOfBirth: "1987-08-19",
    gender: "Female",
    hireDate: "2021-04-15",
    department: "Finance",
    role: "Accountant",
    employmentStatus: "Active",
    attendance: "95.0%",
    payroll: {
      baseSalary: 6000,
      housingBenefits: 1400,
      transportationBenefits: 600,
      foodBenefits: 350,
      commissions: 800,
      deductions: 900,
      netPay: 8550,
      paymentStatus: "Paid",
      paymentDate: "2025-07-15"
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
        screenLefttatus: "Approved"
      },
      {
        requestId: "91234",
        requestType: "resignation",
        startDate: "2026-05-01",
        endDate: "2026-05-31",
        reason: "MBA program",
        screenLefttatus: "Pending"
      },
      {
        requestId: "91234",
        requestType: "resignation",
        date: "2026-05-31",
        reason: "MBA program",
        status: "Pending"
      },
      {
        requestId: "92345",
        requestType: "leave",
        date: "2025-11-15",
        reason: "Medical leave",
        status: "Approved"
      }
    ]
  },

  {
    id: "40318",
    accountType: "user",
    ProfileImage: profileImage,
    name: "James L. Park",
    status: "active",
    firstName: "James",
    middleName: "L.",
    lastName: "Park",
    email: "james.l.park@company.com",
    password: "FINA45PLM78QWE2RFT6YU",
    phone: "+966522334455",
    address: "King Fahd Rd, Jeddah, KSA",
    dateOfBirth: "1990-12-02",
    gender: "Male",
    hireDate: "2022-07-20",
    department: "Finance",
    role: "Financial Analyst",
    employmentStatus: "Active",
    attendance: "88.0%",
    payroll: {
      baseSalary: 5500,
      housingBenefits: 1200,
      transportationBenefits: 550,
      foodBenefits: 300,
      commissions: 1200,
      deductions: 700,
      netPay: 7550,
      paymentStatus: "Paid",
      paymentDate: "2025-07-15"
    },
    documents: ["ID", "Contract"],
    documentsDetails: [
      {
        title: "ID",
        type: "PDF",
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
        screenLefttatus: "Approved"
      },
      {
        requestId: "94567",
        requestType: "resignation",
        startDate: "2026-07-01",
        endDate: "2026-07-31",
        reason: "Career pivot",
        screenLefttatus: "Pending"
      },
      {
        requestId: "94567",
        requestType: "resignation",
        date: "2026-07-31",
        reason: "Career pivot",
        status: "Pending"
      },
      {
        requestId: "95678",
        requestType: "leave",
        date: "2025-12-01",
        reason: "Year-end break",
        status: "Approved"
      }
    ]
  },

  {
    id: "40746",
    accountType: "user",
    ProfileImage: profileImage,
    name: "Sophia N. Lane",
    status: "active",
    firstName: "Sophia",
    middleName: "N.",
    lastName: "Lane",
    email: "sophia.n.lane@company.com",
    password: "AUDT23BNM45PLK7QWE9RT",
    phone: "+966533445566",
    address: "Abdullah Al-Salem St, Dammam, KSA",
    dateOfBirth: "1989-03-22",
    gender: "Female",
    hireDate: "2023-02-10",
    department: "Finance",
    role: "Auditor",
    employmentStatus: "Active",
    attendance: "92.5%",
    payroll: {
      baseSalary: 5800,
      housingBenefits: 1300,
      transportationBenefits: 600,
      foodBenefits: 350,
      commissions: 500,
      deductions: 650,
      netPay: 9400,
      paymentStatus: "Paid",
      paymentDate: "2025-07-15"
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
        type: "PDF",
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
        screenLefttatus: "Approved"
      },
      {
        requestId: "97890",
        requestType: "resignation",
        startDate: "2026-09-01",
        endDate: "2026-09-30",
        reason: "Further certification",
        screenLefttatus: "Pending"
      },
      {
        requestId: "97890",
        requestType: "resignation",
        date: "2026-09-30",
        reason: "Further certification",
        status: "Pending"
      },
      {
        requestId: "98901",
        requestType: "leave",
        date: "2025-11-25",
        reason: "Medical leave",
        status: "Approved"
      }
    ]
  },

  {
    id: "40210",
    accountType: "user",
    ProfileImage: profileImage,
    name: "Ethan W. Miles",
    status: "disabled",
    firstName: "Ethan",
    middleName: "W.",
    lastName: "Miles",
    email: "ethan.w.miles@company.com",
    password: "PRLY33JKL89MNB0QWE4TY",
    phone: "+966544556677",
    address: "Prince Sultan St, Riyadh, KSA",
    dateOfBirth: "1985-06-14",
    gender: "Male",
    hireDate: "2020-10-05",
    department: "Finance",
    role: "Payroll Officer",
    employmentStatus: "Disabled",
    attendance: "70.0%",
    payroll: {
      baseSalary: 5300,
      housingBenefits: 1200,
      transportationBenefits: 550,
      foodBenefits: 300,
      commissions: 0,
      deductions: 1300,
      netPay: 6050,
      paymentStatus: "Paid",
      paymentDate: "2025-07-15"
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
        screenLefttatus: "Approved"
      },
      {
        requestId: "91023",
        requestType: "resignation",
        startDate: "2025-03-01",
        endDate: "2025-03-31",
        reason: "Retirement",
        screenLefttatus: "Approved"
      },
      {
        requestId: "91023",
        requestType: "resignation",
        date: "2025-03-31",
        reason: "Retirement",
        status: "Approved"
      },
      {
        requestId: "92034",
        requestType: "leave",
        date: "2025-02-15",
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
    ProfileImage: profileImage,
    name: "Ava L. Green",
    status: "active",
    firstName: "Ava",
    middleName: "L.",
    lastName: "Green",
    email: "ava.l.green@company.com",
    password: "MKTMG1234FGH56JKL7RT",
    phone: "+966555667788",
    address: "Prince Sultan Blvd, Riyadh, KSA",
    dateOfBirth: "1986-02-14",
    gender: "Female",
    hireDate: "2021-06-01",
    department: "Marketing",
    role: "Marketing Manager",
    employmentStatus: "Active",
    attendance: "97.0%",
    payroll: {
      baseSalary: 6500,
      housingBenefits: 1450,
      transportationBenefits: 650,
      foodBenefits: 400,
      commissions: 1200,
      deductions: 850,
      netPay: 9550,
      paymentStatus: "Paid",
      paymentDate: "2025-07-15"
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
        type: "PDF",
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
        screenLefttatus: "Approved"
      },
      {
        requestId: "101234",
        requestType: "resignation",
        startDate: "2026-03-01",
        endDate: "2026-03-31",
        reason: "Relocation",
        screenLefttatus: "Pending"
      },
      {
        requestId: "101234",
        requestType: "resignation",
        date: "2026-03-31",
        reason: "Relocation",
        status: "Pending"
      },
      {
        requestId: "102345",
        requestType: "leave",
        date: "2025-11-20",
        reason: "Medical leave",
        status: "Approved"
      }
    ]
  },

  {
    id: "50488",
    accountType: "user",
    ProfileImage: profileImage,
    name: "Lucas D. Bell",
    status: "active",
    firstName: "Lucas",
    middleName: "D.",
    lastName: "Bell",
    email: "lucas.d.bell@company.com",
    password: "SEOSP5678DFG90HJK2UI",
    phone: "+966556778899",
    address: "King Fahd Rd, Dammam, KSA",
    dateOfBirth: "1993-09-03",
    gender: "Male",
    hireDate: "2022-11-15",
    department: "Marketing",
    role: "SEO Specialist",
    employmentStatus: "Active",
    attendance: "84.0%",
    payroll: {
      baseSalary: 4800,
      housingBenefits: 1100,
      transportationBenefits: 550,
      foodBenefits: 300,
      commissions: 500,
      deductions: 700,
      netPay: 6550,
      paymentStatus: "Paid",
      paymentDate: "2025-07-15"
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
        screenLefttatus: "Approved"
      },
      {
        requestId: "104567",
        requestType: "resignation",
        startDate: "2026-05-01",
        endDate: "2026-05-31",
        reason: "Further studies",
        screenLefttatus: "Pending"
      },
      {
        requestId: "104567",
        requestType: "resignation",
        date: "2026-05-31",
        reason: "Further studies",
        status: "Pending"
      },
      {
        requestId: "105678",
        requestType: "leave",
        date: "2025-12-05",
        reason: "Year-end break",
        status: "Approved"
      }
    ]
  },

  {
    id: "50923",
    accountType: "user",
    ProfileImage: profileImage,
    name: "Mia S. Ford",
    status: "active",
    firstName: "Mia",
    middleName: "S.",
    lastName: "Ford",
    email: "mia.s.ford@company.com",
    password: "CNTCRT3456JKL78QWE9TY",
    phone: "+966557889900",
    address: "Al Khobar Corniche, KSA",
    dateOfBirth: "1994-12-21",
    gender: "Female",
    hireDate: "2023-03-20",
    department: "Marketing",
    role: "Content Creator",
    employmentStatus: "Active",
    attendance: "86.2%",
    payroll: {
      baseSalary: 5000,
      housingBenefits: 1200,
      transportationBenefits: 600,
      foodBenefits: 350,
      commissions: 600,
      deductions: 650,
      netPay: 8600,
      paymentStatus: "Paid",
      paymentDate: "2025-07-15"
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
        type: "PDF",
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
        screenLefttatus: "Approved"
      },
      {
        requestId: "107890",
        requestType: "resignation",
        startDate: "2026-07-01",
        endDate: "2026-07-31",
        reason: "New opportunity",
        screenLefttatus: "Pending"
      },
      {
        requestId: "107890",
        requestType: "resignation",
        date: "2026-07-31",
        reason: "New opportunity",
        status: "Pending"
      },
      {
        requestId: "108901",
        requestType: "leave",
        date: "2025-11-30",
        reason: "Medical leave",
        status: "Approved"
      }
    ]
  },

  {
    id: "50136",
    accountType: "user",
    ProfileImage: profileImage,
    name: "Logan P. Hill",
    status: "inactive",
    firstName: "Logan",
    middleName: "P.",
    lastName: "Hill",
    email: "logan.p.hill@company.com",
    password: "SMMGR6789ASD12FGH3JK",
    phone: "+966558990011",
    address: "Olaya District, Riyadh, KSA",
    dateOfBirth: "1984-11-11",
    gender: "Male",
    hireDate: "2019-10-10",
    department: "Marketing",
    role: "Social Media Manager",
    employmentStatus: "Inactive",
    attendance: "73.5%",
    payroll: {
      baseSalary: 5200,
      housingBenefits: 1300,
      transportationBenefits: 650,
      foodBenefits: 350,
      commissions: 0,
      deductions: 1200,
      netPay: 6300,
      paymentStatus: "Paid",
      paymentDate: "2025-07-15"
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
        screenLefttatus: "Approved"
      },
      {
        requestId: "110123",
        requestType: "resignation",
        startDate: "2024-12-01",
        endDate: "2024-12-31",
        reason: "Retirement",
        screenLefttatus: "Approved"
      },
      {
        requestId: "110123",
        requestType: "resignation",
        date: "2024-12-31",
        reason: "Retirement",
        status: "Approved"
      },
      {
        requestId: "111234",
        requestType: "leave",
        date: "2025-06-15",
        reason: "Family care",
        status: "Approved"
      }
    ]
  }
]

}

  
  

    
    

