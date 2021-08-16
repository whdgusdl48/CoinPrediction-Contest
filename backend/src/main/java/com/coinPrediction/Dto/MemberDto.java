import com.coinPrediction.domain.Member;

@Getter @Setter
@NoArgsConstructor

public class MemberDto {
    private Long id;
    private String password;
    private String teamName;

    public Member toEntity() {
        return Member.builder()
                    .id(id)
                    .password(password)
                    .teamName(teamName)
                    .build();
    }

    @Builder
    public MemberDto(Long id, String password, String teamName) {
        this.id = id;
        this.password = password;
        this.teamName = teamName;
    }
}