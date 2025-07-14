public class Document {
    private Long id;
    private String title;
    private String content;
    private String fileType;
    private Long fileSize;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private User user;

@Entity
@Table(name = "LeaveRequests")
public class LeaveRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate startDate;
    private LocalDate endDate;
    private String type;

    @Column(columnDefinition = "TEXT")
    private String reason;

    @Enumerated(EnumType.STRING)
    private LeaveStatus status;

    private Timestamp requestedAt;
    private Timestamp respondedAt;

    @ManyToOne
    @JoinColumn(name = "user_ID", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "approver_ID")
    private User approver;
}

public enum LeaveStatus {
    PENDING, APPROVED, REJECTED, CANCELLED
}





    // Getters and Setters
}