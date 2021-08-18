package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.Board;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

public interface BoardService {

    public Board getBoardDetail(HttpServletResponse response, HttpServletRequest request, Long idx);

    public List<Board> getBoardList();

    public List<Board> getBoardPages(Long idx);
}
