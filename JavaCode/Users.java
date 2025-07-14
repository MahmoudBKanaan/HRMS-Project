import java.util.ArrayList;
import java.util.List;



public class User {
    private Long id;
    private String username;
    private String password;
    private String email;
    private Role role;


@Entity
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String passwordHash;

    @ManyToOne
    @JoinColumn(name = "role_ID", nullable = false)
    private Role role;

    @Column(columnDefinition = "TEXT")
    private String address;

    private LocalDate dateOfBirth;

    private String contactNumber;

    private String department;

    @Column(nullable = false, updatable = false)
    private Timestamp createdAt;

    @Column(nullable = false)
    private Timestamp updatedAt;

    @Column(nullable = false)
    private Boolean active = true;

    // Relationships
    @OneToMany(mappedBy = "user")
    private List<Document> documents;

    @OneToMany(mappedBy = "user")
    private List<LeaveRequest> leaveRequests;

    @OneToMany(mappedBy = "user")
    private List<AttendanceRecord> attendanceRecords;

    @OneToOne(mappedBy = "user")
    private SalaryDetail salaryDetail;

    @OneToMany(mappedBy = "user")
    private List<Payment> payments;

    @OneToMany(mappedBy = "user")
    private List<Payslip> payslips;

    @OneToMany(mappedBy = "user")
    private List<ResignationRequest> resignationRequests;
}


}