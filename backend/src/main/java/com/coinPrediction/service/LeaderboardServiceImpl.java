package com.coinPrediction.service;

import com.coinPrediction.domain.Leaderboard;
import com.coinPrediction.repository.LeaderboardRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class LeaderboardServiceImpl implements LeaderboardService{

    @Autowired
    private LeaderboardRepository leaderboardRepository;

    @Override
    public List<Leaderboard> getLeaderboardList() {
        return leaderboardRepository.findAll();
    }
}
