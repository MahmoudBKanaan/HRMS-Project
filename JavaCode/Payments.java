public class payments {
    private Long id;
    private String paymentMethod;
    private Double amount;
    private LocalDate paymentDate;
    private User user;

    @Entity
    @Table(name = "Payments")
    public class Payment {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(precision = 10, scale = 2)
        private BigDecimal amount;

        private Timestamp date;
        private String method;

        private LocalDate periodStart;
        private LocalDate periodEnd;

        @ManyToOne
        @JoinColumn(name = "user_ID", nullable = false)
        private User user;
    }


        // Getters and Setters
    }
