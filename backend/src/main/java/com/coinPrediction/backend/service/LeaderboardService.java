package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.Leaderboard;

import java.util.List;

public interface LeaderboardService {
    public List<Leaderboard> getLeaderboardList();
}
