package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.News;

import java.util.List;

public interface NewsService {
    public News getNews(Long idx);

    public List<News> getNewsList();
}
