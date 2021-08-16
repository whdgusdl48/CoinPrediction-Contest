package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.Leaderboard;
import com.coinPrediction.backend.repository.LeaderboardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LeaderboardServiceImpl implements LeaderboardService{

    private LeaderboardRepository leaderboardRepository;

    @Override
    public List<Leaderboard> getLeaderboardList() {
        return leaderboardRepository.findAll();
    }
}
