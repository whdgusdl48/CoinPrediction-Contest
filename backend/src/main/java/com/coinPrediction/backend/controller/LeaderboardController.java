package com.coinPrediction.backend.controller;

import com.coinPrediction.backend.domain.Leaderboard;
import com.coinPrediction.backend.service.LeaderboardServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LeaderboardController {

    @Autowired
    LeaderboardServiceImpl leaderboardService;

    @GetMapping("/api/leaderboard")
    public List<Leaderboard> getLeaderboardList() { return leaderboardService.getLeaderboardList(); }

}
