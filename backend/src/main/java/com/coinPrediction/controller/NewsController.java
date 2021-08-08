package com.coinPrediction.controller;

import com.coinPrediction.service.NewsService;
import com.coinPrediction.service.NewsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;

public class NewsController {

    @Autowired
    NewsServiceImpl newsService;
}
