package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.News;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

public interface NewsService {
    public News getNews(HttpServletRequest request, HttpServletResponse response, Long idx);

    public List<News> getNewsList();

    public List<News> getNewsPage(Long idx);
}
