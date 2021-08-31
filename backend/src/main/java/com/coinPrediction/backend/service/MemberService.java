package com.coinPrediction.backend.service;

import com.coinPrediction.backend.domain.Member;

public interface MemberService {
    Member loginCheck(String teamName, String passWord);
}