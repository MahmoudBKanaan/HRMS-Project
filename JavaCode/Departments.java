public class departments {
    private Long id;
    private String name;
    private String description;
    private User manager;

    @Entity
    @Table(name = "Departments")
    public class Department {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(nullable = false, unique = true)
        private String name;

        @OneToOne
        @JoinColumn(name = "head_ID")
        private User head;
}


        // Getters and Setters
    }
