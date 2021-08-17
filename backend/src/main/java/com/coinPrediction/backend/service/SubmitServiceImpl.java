package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.Submit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SubmitServiceImpl implements SubmitService{

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public void insertSubmitData(Submit submit) {
        mongoTemplate.insert(submit);
    }

}
