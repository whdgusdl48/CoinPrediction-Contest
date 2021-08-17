package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class QuestionServiceImpl implements QuestionService{

    @Autowired
    private JavaMailSender mailSender;

    @Override
    public void sendMail(Question question) {
        StringBuilder sb = new StringBuilder();
        sb.append(question.getTeamName()).append("-").append(question.getTitle());

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("whdgusdl97@gmail.com");
        message.setSubject(question.getTitle());
        message.setText(question.getContent());

        mailSender.send(message);
    }
}
