package com.coinPrediction.service;

import com.coinPrediction.domain.BoardDTO;
import com.coinPrediction.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class BoardServiceImpl implements BoardService{

    @Autowired
    private BoardRepository boardRepository;

    public BoardDTO getBoardDetail(Long idx) {
        return boardRepository.findByIdx(idx);
    }

    @Override
    public List<BoardDTO> getBoardList() {
        return boardRepository.findAll();
    }
}
