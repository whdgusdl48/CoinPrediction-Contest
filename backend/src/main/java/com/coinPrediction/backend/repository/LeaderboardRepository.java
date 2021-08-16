package com.coinPrediction.backend.repository;

import com.coinPrediction.backend.domain.Leaderboard;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface LeaderboardRepository extends MongoRepository<Leaderboard, Long> {

    List<Leaderboard> findAll();
}
