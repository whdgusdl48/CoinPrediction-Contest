package com.coinPrediction.backend.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Document(collection = "Member")
public class Member {

    @Id
    private Long id;
    private String password;
    private String teamName;

    @Builder
    public Member(Long id, String password, String teamName) {
        this.id = id;
        this.password = password;
        this.teamName = teamName;
    }
}