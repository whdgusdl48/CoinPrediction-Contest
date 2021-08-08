package com.coinPrediction.service;

import com.coinPrediction.domain.News;

import java.util.List;

public interface NewsService {
    public News getNewsDetaill(Long idx);

    public List<News> getNewsList();
}
