package com.coinPrediction.backend.domain;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Question {

    String teamName;
    String title;
    String content;

    @Builder
    Question(String teamName, String title, String content) {
        this.teamName = teamName;
        this.title = title;
        this.content = content;
    }
}
