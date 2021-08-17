package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.Board;

import java.util.List;

public interface BoardService {

    public Board getBoardDetail(Long idx);

    public List<Board> getBoardList();

    public List<Board> getBoardPages(Long idx);
}
