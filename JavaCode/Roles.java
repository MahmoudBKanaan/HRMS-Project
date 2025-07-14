
import java.util.ArrayList;




public class Roles {
    public static final String ADMIN = "ADMIN";
    public static final String USER = "USER";
    public static final String MANAGER = "MANAGER";


@Entity
@Table(name = "Roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String permissions;

    @OneToMany(mappedBy = "role")
    private List<User> users = new ArrayList<user>();
}





}

