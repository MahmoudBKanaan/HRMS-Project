public class LeaveRequest {
    private Long id;
    private String reason;
    private LocalDate startDate;
    private LocalDate endDate;
    private String status;
    private User user;


@Entity
@Table(name = "AttendanceRecords",
       uniqueConstraints = @UniqueConstraint(columnNames = {"user_ID", "date"}))
public class AttendanceRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;
    private Timestamp checkInTime;
    private Timestamp checkOutTime;
    private String location;

    @ManyToOne
    @JoinColumn(name = "user_ID", nullable = false)
    private User user;
}





    // Getters and Setters
}