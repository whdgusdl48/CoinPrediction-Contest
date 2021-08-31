package com.coinPrediction.backend.domain;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "member") // member.member
@NoArgsConstructor(access = AccessLevel.PROTECTED)

public class Member {

    @Id
    private Long _id;
    private String teamName;
    private String passWord;

    public Long getId() {
        return _id; 
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    @Builder
    public Member(Long _id, String teamName, String passWord) {
        this._id = _id;
        this.teamName = teamName;
        this.passWord = passWord;
    }
}