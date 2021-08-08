package com.coinPrediction.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@Getter
@Setter
public class Leaderboard {
    String id;
    String teamname;
    String score;
    LocalDateTime upddateDate;
}
