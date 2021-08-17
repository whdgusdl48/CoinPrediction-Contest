package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public void saveTest(User user) {
        mongoTemplate.insert(user);
    }

}
