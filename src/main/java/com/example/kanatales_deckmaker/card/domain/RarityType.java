package com.example.kanatales_deckmaker.card.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/** 카나테일즈 카드 등급타입 */
@Getter
@RequiredArgsConstructor
public enum RarityType {
    COMMON("커먼")
    ,UNCOMMON("언커먼")
    ,SUPERIOR("슈페리어")
    ,RARE("레어")
    ,DOUBLE_RARE("더블레어")
    ,UNIQUE("유니크");

    private final String name;

}
