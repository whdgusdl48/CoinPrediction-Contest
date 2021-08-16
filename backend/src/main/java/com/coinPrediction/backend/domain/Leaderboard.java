package com.coinPrediction.backend.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Getter
@Setter
@Document(collation = "Leaderboard")
public class Leaderboard {
    String id;
    String teamname;
    String score;
    LocalDateTime upddateDate;
}
