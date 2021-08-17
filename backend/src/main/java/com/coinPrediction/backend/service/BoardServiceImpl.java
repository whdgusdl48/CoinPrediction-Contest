package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.Board;
import com.coinPrediction.backend.exception.RestException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.LimitOperation;
import org.springframework.data.mongodb.core.aggregation.SkipOperation;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {

    @Autowired
    MongoTemplate mongoTemplate;

    @Override
    public Board getBoardDetail(Long idx) {
        Board board = mongoTemplate.findById(idx, Board.class);
        // 세션 이용해서 조회수 중복 없이 올라가는 기능 추가해야 함.
        board.setHit(board.getHit() + 1);
        mongoTemplate.save(board);
        return Optional.ofNullable(board).orElseThrow(() -> new RestException(HttpStatus.NOT_FOUND, "Not found board"));
    }

    @Override
    public List<Board> getBoardList() {
        return mongoTemplate.findAll(Board.class);
    }

    @Override
    public List<Board> getBoardPages(Long idx) {
        SkipOperation skip = Aggregation.skip((idx - 1) * 10);
        LimitOperation limit = Aggregation.limit(idx * 10);

        Aggregation aggregation = Aggregation.newAggregation(limit, skip);
        AggregationResults<Board> results = mongoTemplate.aggregate(aggregation, "Board", Board.class);

        List<Board> board = results.getMappedResults();
        return board;
    }
}
