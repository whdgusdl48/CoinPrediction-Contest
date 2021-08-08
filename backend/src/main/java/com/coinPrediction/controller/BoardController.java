package com.coinPrediction.controller;

import com.coinPrediction.domain.Board;
import com.coinPrediction.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
public class BoardController {

    @Autowired
    private BoardService boardService;

    @GetMapping("/api/board/{idx}")
    public Board selectBoardDetail(@PathVariable Long idx) {
        return boardService.getBoardDetail(idx);
    }

    @GetMapping("/api/boards")
    public List<Board> getBoardList() {
        return boardService.getBoardList();
    }
}
