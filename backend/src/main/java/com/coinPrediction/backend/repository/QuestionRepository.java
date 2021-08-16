package com.coinPrediction.backend.repository;

import com.coinPrediction.backend.domain.Question;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuestionRepository extends MongoRepository<Question, Long> {
    // 여기에 내용 추가 안 해도 되나?
}
