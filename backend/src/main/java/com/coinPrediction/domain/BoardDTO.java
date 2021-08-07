package com.coinPrediction.domain;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class BoardDTO {

    private Long idx;
    // 공지사항 여부
    private boolean type;
    private String title;
    private String content;
    private Long hit;
    private String[] filePath;
    private String[] imgPath;
    private LocalDateTime date;

    public BoardDTO(BoardDTO entity) {
        this.idx = entity.getIdx();
        this.title = entity.getTitle();
        this.content = entity.getTitle();
        this.hit = entity.getHit();
        this.filePath = entity.getFilePath();
        this.imgPath = entity.getImgPath();
        this.date = entity.getDate();
    }
}
