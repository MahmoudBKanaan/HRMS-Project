public class payslips {
    private Long id;
    private String employeeName;
    private Double salary;
    private LocalDate paymentDate;
    private User user;

    @Entity
    @Table(name = "Payslips")
    public class Payslip {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private LocalDate periodStart;
        private LocalDate periodEnd;

        private Timestamp generatedAt;

        private String filePath;

        @ManyToOne
        @JoinColumn(name = "user_ID", nullable = false)
        private User user;
    }


        // Getters and Setters
    }