public class Document {
    private Long id;
    private String title;
    private String content;
    private LocalDate createdAt;
    private LocalDate updatedAt;
    private User user;


@Entity
@Table(name = "Documents")
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;

    private String filePath;

    private Timestamp uploadedAt;

    @ManyToOne
    @JoinColumn(name = "user_ID", nullable = false)
    private User user;
}






}
