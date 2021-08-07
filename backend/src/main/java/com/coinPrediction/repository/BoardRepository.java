package com.coinPrediction.repository;

import com.coinPrediction.domain.BoardDTO;
import org.springframework.data.repository.query.Param;

public class BoardRepository {
    // 이 부분을 mongoDB에서 읽어올 수 있게 만들어야 함.
    public static BoardDTO findByIdx(Long idx) {
        return null;
    }
}
