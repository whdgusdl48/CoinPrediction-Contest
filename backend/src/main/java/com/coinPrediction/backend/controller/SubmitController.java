package com.coinPrediction.backend.controller;

import com.coinPrediction.backend.domain.Submit;
import com.coinPrediction.backend.service.SubmitServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class SubmitController {

    @Autowired
    private SubmitServiceImpl submitService;

    @PostMapping("/api/submit/")
    public void insertSubmit(@RequestBody Submit submit) {
        submitService.insertSubmitData(submit);
    }
}
