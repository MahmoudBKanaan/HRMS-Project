public class resignationRequests {
    private Long id;
    private String employeeName;
    private String reason;
    private LocalDate requestDate;
    private User user;

    @Entity
    @Table(name = "ResignationRequests")
    public class ResignationRequest {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private LocalDate effectiveDate;
        private Timestamp submissionDate;

        @Column(columnDefinition = "TEXT")
        private String reason;

        @Enumerated(EnumType.STRING)
        private ResignationStatus status;

        private Timestamp responseDate;
        private Timestamp withdrawalDate;

        private String withdrawalReason;

        @ManyToOne
        @JoinColumn(name = "user_ID", nullable = false)
        private User user;

        @ManyToOne
        @JoinColumn(name = "approver_ID")
        private User approver;
    }

    public enum ResignationStatus {
        PENDING, APPROVED, REJECTED, WITHDRAWN
    }


        // Getters and Setters
    
}