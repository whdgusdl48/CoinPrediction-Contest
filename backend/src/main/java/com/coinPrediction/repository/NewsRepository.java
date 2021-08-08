package com.coinPrediction.repository;

import com.coinPrediction.domain.News;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface NewsRepository extends MongoRepository<News, Long> {

    News findByIdx(Long idx);

    List<News> findAll();
}
