package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.Submit;
import com.coinPrediction.backend.repository.SubmitRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SubmitServiceImpl implements SubmitService{

    SubmitRepository submitRepository;

    @Override
    public Optional<Submit> getSubmitDetail(String id) {
        return submitRepository.findById(id);
    }

}
