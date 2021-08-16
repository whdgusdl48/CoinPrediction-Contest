package com.coinPrediction.backend.controller;

import com.coinPrediction.backend.domain.Submit;
import com.coinPrediction.backend.service.SubmitServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class SubmitController {

    @Autowired
    private SubmitServiceImpl submitService;

    @GetMapping("/api/submit/{id}")
    public Optional<Submit> getSubmitDetail(@PathVariable String id) {
        return submitService.getSubmitDetail(id);
    }
}
