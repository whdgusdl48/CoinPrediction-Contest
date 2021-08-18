package com.coinPrediction.backend.controller;

import com.coinPrediction.backend.domain.News;
import com.coinPrediction.backend.service.NewsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
public class NewsController {

    @Autowired
    NewsServiceImpl newsService;

    @GetMapping("/api/news/{idx}")
    public News getNews (HttpServletRequest request, HttpServletResponse response, @PathVariable Long idx) {
        return newsService.getNews(request, response, idx);
    }

    @GetMapping("/api/newses")
    public List<News> getNewsList() { return newsService.getNewsList(); }

    @GetMapping("/api/news/pages/{idx}")
    public List<News> getNewsPage(@PathVariable Long idx) { return newsService.getNewsPage(idx); }
}
