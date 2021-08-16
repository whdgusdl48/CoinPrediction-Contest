import javax.annotation.processing.Generated;

import jdk.nashorn.internal.objects.annotations.Getter;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity

public class Member {

    @Id
    @GeneratedValue
    private Long id;
    private String passWord;
    private String teamName;

    @Builder
    public Member(Long id, String passWord, String teamName) {
        this.id = id;
        this.passWord = passWord;
        this.teamName = teamName;
    }
}