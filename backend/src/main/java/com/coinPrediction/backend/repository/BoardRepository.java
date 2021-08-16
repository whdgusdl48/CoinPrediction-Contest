package com.coinPrediction.backend.repository;

import com.coinPrediction.backend.domain.Board;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface BoardRepository extends MongoRepository<Board, Long> {
    // 이 부분을 mongoDB에서 읽어올 수 있게 만들어야 함.
    Board findByIdx(Long idx);

    List<Board> findAll();
}
