package com.coinPrediction.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@Getter
@Setter
public class BoardDTO {

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

}
