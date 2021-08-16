package com.coinPrediction.backend.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Question {

    String teamname;
    String title;
    String content;

    @Builder
    Question(String teamname, String title, String content) {
        this.teamname = teamname;
        this.title = title;
        this.content = content;
    }
}
