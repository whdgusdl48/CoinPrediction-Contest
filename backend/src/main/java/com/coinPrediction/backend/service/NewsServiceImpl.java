package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.News;
import com.coinPrediction.backend.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsServiceImpl implements NewsService {

    NewsRepository newsRepository;

    @Override
    public News getNewsDetaill(Long idx) {
        News news = newsRepository.findByIdx(idx);
        // 세션 이용한 중복 처리 추가해야 함.
        // db에 저장하는 걸로 바꿔야 함.
        news.setHit(news.getHit() + 1);
        newsRepository.save(news);
        return news;
    }

    @Override
    public List<News> getNewsList() {
        return newsRepository.findAll();
    }

}
