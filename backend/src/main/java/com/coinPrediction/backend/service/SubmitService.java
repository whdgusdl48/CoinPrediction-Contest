package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.Submit;

import java.util.Optional;

public interface SubmitService {
    public Optional<Submit> getSubmitDetail(String id);
}
