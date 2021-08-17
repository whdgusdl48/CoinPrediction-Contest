package com.coinPrediction.backend.domain;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Document(collection = "Board")
public class Board {

    @Id
    private Long idx;
    // 공지사항 여부
    private boolean type;
    private String title;
    private String content;
    private Long hit;
    private String[] filePath;
    private String[] imgPath;
    private LocalDateTime date;

    @Builder
    Board(Long idx, boolean type, String title, String content, Long hit, String[] filePath, String[] imgPath, LocalDateTime date) {
        this.idx = idx;
        this.type = type;
        this.title = title;
        this.content = content;
        this.hit = hit;
        this.filePath = filePath;
        this.imgPath = imgPath;
        this.date = date;
    }

}
