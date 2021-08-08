package com.coinPrediction.domain;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class News {
    Long idx;
    String teamname;
    String title;
    LocalDateTime date;
    String content;
    Long hit;
}
