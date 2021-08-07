package com.coinPrediction.service;

import com.coinPrediction.domain.BoardDTO;

import java.util.List;

public interface BoardService {

    public BoardDTO getBoardDetail(Long idx);

    public List<BoardDTO> getBoardList();
}
