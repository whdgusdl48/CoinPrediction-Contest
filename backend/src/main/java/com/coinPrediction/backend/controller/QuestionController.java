package com.coinPrediction.backend.controller;

import com.coinPrediction.backend.domain.Question;
import com.coinPrediction.backend.service.QuestionServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class QuestionController {

    @Autowired
    QuestionServiceImpl questionService;

    @PostMapping("/api/Question")
    public void sendQuestionMail(@RequestBody Map<String, String> req) {
        Question question = Question.builder().teamName(req.get("teamname"))
                .title(req.get("title")).content(req.get("content")).build();
        questionService.sendMail(question);
    }
}
