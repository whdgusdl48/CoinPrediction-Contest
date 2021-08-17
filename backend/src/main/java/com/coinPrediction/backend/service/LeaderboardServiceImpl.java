package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.Leaderboard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LeaderboardServiceImpl implements LeaderboardService{

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public List<Leaderboard> getLeaderboardList() {
        return mongoTemplate.findAll(Leaderboard.class);
    }
}
