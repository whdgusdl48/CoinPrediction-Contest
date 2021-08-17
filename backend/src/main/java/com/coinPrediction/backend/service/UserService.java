package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;

public interface UserService {
    public void saveTest(User user);
}
