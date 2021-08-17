package com.coinPrediction.backend.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Getter
@Document(collection = "Submit")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Submit {
    @Id
    String id;
    String teamName;
    String[] filepath;
    LocalDateTime[] submitDate;

    @Builder
    Submit(String id, String teamName, String[] filepath, LocalDateTime[] submitDate) {
        this.id = id;
        this.teamName = teamName;
        this.filepath = filepath;
        this.submitDate = submitDate;
    }
}
