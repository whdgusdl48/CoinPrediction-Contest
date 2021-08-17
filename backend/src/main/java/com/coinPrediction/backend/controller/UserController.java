package com.coinPrediction.backend.controller;

import com.coinPrediction.backend.domain.User;
import com.coinPrediction.backend.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @PostMapping("/api/save")
    public void saveUser(@RequestBody Map<String, String> req) {
        User user = User.builder().id(req.get("id")).email(req.get("email"))
                .name(req.get("name")).password(req.get("password")).build();
        userService.saveTest(user);
    }

}
