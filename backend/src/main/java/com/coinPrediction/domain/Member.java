import javax.annotation.processing.Generated;

import jdk.nashorn.internal.objects.annotations.Getter;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity

public class Member {

    @Id
    @GeneratedValue
    private String id;
    private String passWord;
    private String teamName;

    @Builder
    public Member(String id, String passWord, String teamName) {
        this.id = id;
        this.passWord = passWord;
        this.teamName = teamName;
    }
}