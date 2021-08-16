package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.Question;

public interface QuestionService {

    public void sendMail(Question question);
}
