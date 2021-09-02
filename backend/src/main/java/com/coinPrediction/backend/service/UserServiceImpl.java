package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.User;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public boolean saveTest(User user) {
        String hashedPassword = hashPassword(user.getPassword());
//        System.out.println("hash finished");
        user.setPassword(hashedPassword);
//        System.out.println("set password");
        mongoTemplate.insert(user);
        return true;
    }

    @Override
    public String validatePassword(User user) {
        String hashedPassword = hashPassword(user.getPassword());
        if (hashedPassword == null) return "password hashing failed";
//        System.out.println("hashed finish");
        User searchedUser = mongoTemplate.findById(user.getId(), User.class);
//        System.out.println("user serached");
        if (searchedUser == null) return "user don't exist";
//        System.out.println("user find : " + searchedUser.getId());
        // 리턴시 잘못된 비밀번호
        if(!BCrypt.checkpw(user.getPassword(), hashedPassword)) return "wrong password";
//        System.out.println("log in : " + user.getId());
        return "login success : " + user.getId();
    }

    private String hashPassword(String plainPassword) {
        return BCrypt.hashpw(plainPassword, BCrypt.gensalt());
    }

}
