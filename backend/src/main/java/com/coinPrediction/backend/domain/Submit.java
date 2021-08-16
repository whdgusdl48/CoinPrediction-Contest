package com.coinPrediction.backend.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Getter
@Document(collection = "Submit")
public class Submit {
    String id;
    String teamname;
    String filepath[];
    LocalDateTime submitDate[];
}
