import javax.annotation.processing.Generated;

import jdk.nashorn.internal.objects.annotations.Getter;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity

public class Member {

    @Id
    @GeneratedValue
    private Long id;
    private String password;

    @Builder
    public Member(Long id, String password) {
        this.id = id;
        this.password = password;
    }
}