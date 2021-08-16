package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.Board;
import com.coinPrediction.backend.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService{

    private BoardRepository boardRepository;

    @Override
    public Board getBoardDetail(Long idx) {
        Board board = boardRepository.findByIdx(idx);
        // 세션 이용해서 조회수 중복 없이 올라가는 기능 추가해야 함.
        board.setHit(board.getHit() + 1);
        boardRepository.save(board);
        return board;
    }

    @Override
    public List<Board> getBoardList() {
        return boardRepository.findAll();
    }
}
