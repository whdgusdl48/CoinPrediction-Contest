package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.News;
import com.coinPrediction.backend.exception.RestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.LimitOperation;
import org.springframework.data.mongodb.core.aggregation.SkipOperation;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NewsServiceImpl implements NewsService {

    @Autowired
    MongoTemplate mongoTemplate;

    @Override
    public News getNews(Long idx) {
        News news = mongoTemplate.findById(idx, News.class);
        // 세션 확인 후 중복값일시, hit + 1 안 하는 기능 추가해야 함.
        news.setHit(news.getHit() + 1);
        mongoTemplate.save(news);
        return Optional.ofNullable(news).orElseThrow(() ->
                new RestException(HttpStatus.NOT_FOUND, "Not found news"));
    }

    @Override
    public List<News> getNewsList() {
        return mongoTemplate.findAll(News.class);
    }

    @Override
    public List<News> getNewsPage(Long idx) {
        SkipOperation skip = Aggregation.skip((idx - 1) * 10);
        LimitOperation limit = Aggregation.limit(idx * 10);

        Aggregation aggregation = Aggregation.newAggregation(limit, skip);
        AggregationResults<News> results = mongoTemplate.aggregate(aggregation, "News", News.class);

        List<News> news = results.getMappedResults();
        return news;
    }

}
