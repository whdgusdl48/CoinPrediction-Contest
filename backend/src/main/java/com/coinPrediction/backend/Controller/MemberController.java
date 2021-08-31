package com.coinPrediction.backend.Controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.coinPrediction.backend.service.MemberServiceImpl;
@Controller

public class MemberController {
    @RequestMapping("/") // http://localhost까지만 나옴, 시작페이지 (수정 필요 ?)

    public String index() {
        MemberServiceImpl a = new MemberServiceImpl();
        a.loginCheck("1234","1234");
        return "index"; // index.jsp로 포워딩
        // 이에 걸맞는 view가 출력됨
        // frontend단에서 설계한 view랑 일치하도록 수정 필요
    }
}
