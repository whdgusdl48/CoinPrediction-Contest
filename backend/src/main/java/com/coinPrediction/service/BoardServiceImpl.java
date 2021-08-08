package com.coinPrediction.service;

import com.coinPrediction.domain.Board;
import com.coinPrediction.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class BoardServiceImpl implements BoardService{

    @Autowired
    private BoardRepository boardRepository;

    public Board getBoardDetail(Long idx) {
        return boardRepository.findByIdx(idx);
    }

    @Override
    public List<Board> getBoardList() {
        return boardRepository.findAll();
    }
}
