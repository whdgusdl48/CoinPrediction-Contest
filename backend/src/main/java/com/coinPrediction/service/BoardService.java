package com.coinPrediction.service;

import com.coinPrediction.domain.Board;

import java.util.List;

public interface BoardService {

    public Board getBoardDetail(Long idx);

    public List<Board> getBoardList();
}
