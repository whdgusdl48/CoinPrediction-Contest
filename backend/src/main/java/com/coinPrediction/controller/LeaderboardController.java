package com.coinPrediction.controller;

import com.coinPrediction.domain.Leaderboard;
import com.coinPrediction.service.LeaderboardServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

public class LeaderboardController {

    @Autowired
    LeaderboardServiceImpl leaderboardService;

    @GetMapping("/api/leaderboard")
    public List<Leaderboard> getLeaderboardList() { return leaderboardService.getLeaderboardList(); }

}
