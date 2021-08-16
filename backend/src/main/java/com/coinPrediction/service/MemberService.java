import com.coinPrediction.Dto.MemberDto;

@Service
@AllArgsConstructor

public class MemerService implements userDetailService {
    private MemberRepository memberRepository;

    @Transactional
    public Long signUp(MemberDto memberDto) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        membetDto.setPassword(passwordEncoder.encode(memberDto.getPassword()));

        return memberRepository.save(memberDto.toEntity()).getId();
    }

    @Override
    public UserDetails loadUserByteamName(String teamName) throws UsernameNotFoundException {
        Optional<Member> memberWrapper = memberRepository.findByusername(teamName);
        Member member = memberWrapper.get();

        return new User(member.getUsername(), member.getPassword());
    }
}