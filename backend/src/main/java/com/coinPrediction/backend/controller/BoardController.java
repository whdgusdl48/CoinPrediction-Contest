package com.coinPrediction.backend.controller;

import com.coinPrediction.backend.domain.Board;
import com.coinPrediction.backend.service.BoardServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;


@RestController
public class BoardController {

    @Autowired
    private BoardServiceImpl boardService;

    @GetMapping("/api/board/{idx}")
    public Board selectBoardDetail(HttpServletResponse response, HttpServletRequest request, @PathVariable Long idx) {
        return boardService.getBoardDetail(response, request, idx);
    }

    @GetMapping("/api/boards")
    public List<Board> getBoardList() {
        return boardService.getBoardList();
    }

    @GetMapping("/api/board/pages/{idx}")
    public List<Board> getBoardPages(@PathVariable Long idx) {
        return boardService.getBoardPages(idx);
    }

}