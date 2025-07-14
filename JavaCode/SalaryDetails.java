/* public class salaryDetails {
    private Long id;
    private String employeeName;
    private String position;
    private Double baseSalary;
    private Double bonus;
    private Double deductions;
    private Double netSalary;


@Entity
@Table(name = "SalaryDetails")
public class SalaryDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(precision = 10, scale = 2)
    private BigDecimal baseSalary;

    @Column(precision = 10, scale = 2)
    private BigDecimal bonuses;

    @Column(precision = 10, scale = 2)
    private BigDecimal deductions;

    private LocalDate effectiveDate;

    @OneToOne
    @JoinColumn(name = "user_ID", unique = true, nullable = false)
    private User user;
}




    // Getters and Setters
} */