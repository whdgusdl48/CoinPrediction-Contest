package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.User;

public interface UserService {
    public boolean saveTest(User user);

    public String validatePassword(User user);
}
