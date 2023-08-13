package com.example.kanatales_deckmaker.comment.domain;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Comment {

    private Long id;
    private String contents;
    private String writer;
    private Long sharedId;
    private String createDate;
}

