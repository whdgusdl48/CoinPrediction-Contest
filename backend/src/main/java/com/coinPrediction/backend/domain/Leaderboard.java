package com.coinPrediction.backend.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Document(collation = "Leaderboard")
public class Leaderboard {
    @Id
    String id;
    String teamName;
    String score;
    LocalDateTime upddateDate;

}
