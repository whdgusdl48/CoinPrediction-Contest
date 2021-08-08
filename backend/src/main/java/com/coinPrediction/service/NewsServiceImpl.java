package com.coinPrediction.service;

import com.coinPrediction.domain.News;
import com.coinPrediction.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class NewsServiceImpl implements NewsService {

    @Autowired
    NewsRepository newsRepository;

    @Override
    public News getNewsDetaill(Long idx) {
        News news = newsRepository.findByIdx(idx);
        // 세션 이용한 중복 처리 추가해야 함.
        news.setHit(news.getHit());
        return news;
    }

    @Override
    public List<News> getNewsList() {
        return newsRepository.findAll();
    }

}
