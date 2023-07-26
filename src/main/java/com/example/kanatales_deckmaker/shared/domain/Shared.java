package com.example.kanatales_deckmaker.shared.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Shared {
    private Long id;
    private String title;
    private String contents;

    //fk
    private Long deckId;

    private String writer;
    private String createDate;
    private Integer views;


}
