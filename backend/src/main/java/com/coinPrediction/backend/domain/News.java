package com.coinPrediction.backend.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Getter
@Setter
@Document(collection = "News")
public class News {

    @Id
    Long idx;
    String teamname;
    String title;
    LocalDateTime date;
    String content;
    Long hit;
}
