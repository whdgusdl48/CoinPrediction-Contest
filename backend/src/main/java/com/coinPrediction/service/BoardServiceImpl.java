package com.coinPrediction.service;

import com.coinPrediction.domain.Board;
import com.coinPrediction.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class BoardServiceImpl implements BoardService{

    @Autowired
    private BoardRepository boardRepository;

    @Override
    public Board getBoardDetail(Long idx) {
        Board board = boardRepository.findByIdx(idx);
        // 세션 이용해서 조회수 중복 없이 올라가는 기능 추가해야 함.
        // db에 저장하는 걸로 바꿔야 함.
        board.setHit(board.getHit() + 1);
        return boardRepository.findByIdx(idx);
    }

    @Override
    public List<Board> getBoardList() {
        return boardRepository.findAll();
    }
}
