package com.coinPrediction.repository;

import com.coinPrediction.domain.BoardDTO;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BoardRepository extends MongoRepository<BoardDTO, Long> {
    // 이 부분을 mongoDB에서 읽어올 수 있게 만들어야 함.
    BoardDTO findByIdx(Long idx);

    List<BoardDTO> findAll();
}
