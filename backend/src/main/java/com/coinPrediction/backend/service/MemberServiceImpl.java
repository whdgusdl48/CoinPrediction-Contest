package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
    @Autowired
    private MongoTemplate mongoTemplate;

    String COLLECTION_NAME = "member";

    @Override
    public Member loginCheck(String teamName, String passWord) {
        Member member = new Member((long) 0.2,"2","3");
        mongoTemplate.insert(member, COLLECTION_NAME);
        Query query = new Query(new Criteria("_id").is(teamName).and(passWord).is(passWord));
        List<Member> list = mongoTemplate.find(query, Member.class, COLLECTION_NAME);
        if(list.size() > 0)
            return list.get(0);
        else
            return null;
    }
}