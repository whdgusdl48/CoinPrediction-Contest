package com.coinPrediction.repository;

import com.coinPrediction.domain.Leaderboard;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface LeaderboardRepository extends MongoRepository<Leaderboard, Long> {

    List<Leaderboard> findAll();
}
