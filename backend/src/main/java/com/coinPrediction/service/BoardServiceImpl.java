package com.coinPrediction.service;

import com.coinPrediction.domain.BoardDTO;
import com.coinPrediction.repository.BoardRepository;

import java.util.List;

public class BoardServiceImpl implements BoardService{

    // mongodb랑 연계해서 구현해야 함.
    @Override
    public BoardDTO getBoardDetail(Long idx) {
        BoardDTO entity = BoardRepository.findByIdx(idx);
        return entity;
    }

    @Override
    public List<BoardDTO> getBoardList() {
        return null;
    }
}
