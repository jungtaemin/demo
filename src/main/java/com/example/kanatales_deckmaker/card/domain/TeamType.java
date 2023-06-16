package com.example.kanatales_deckmaker.card.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/** 카나테일즈 소속 */
@Getter
@RequiredArgsConstructor
public enum TeamType {
    DARKLORE("다크로어")
        ,CRUX("크룩스")
        ,ROYLE("사립")
        ,VITA("공립")
        ,ETC("무소속");

    private final String name;

}
