package com.coinPrediction.controller;

import com.coinPrediction.domain.Board;
import com.coinPrediction.service.BoardService;
import com.coinPrediction.service.BoardServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
public class BoardController {

    @Autowired
    private BoardServiceImpl boardService;

    @GetMapping("/api/board/{idx}")
    public Board selectBoardDetail(@PathVariable Long idx) {
        Board board = boardService.getBoardDetail(idx);
        // 세션 이용해서 조회수 중복 없이 올라가는 기능 추가해야 함.
        board.setHit(board.getHit());
        return board;
    }

    @GetMapping("/api/boards")
    public List<Board> getBoardList() {
        return boardService.getBoardList();
    }
}
