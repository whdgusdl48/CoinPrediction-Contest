@Controller
@AllArgsConstructor

public class MemberController {
    private MemberService memberService;

    @GetMapping("/")
    public String index() {
        return "/index";
    }

    @GetMapping("/member/login")
    public String login() {
        return "member/loginForm";
    }

}
