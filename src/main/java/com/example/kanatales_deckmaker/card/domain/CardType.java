package com.example.kanatales_deckmaker.card.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/** 카나테일즈 카드종류 */
@Getter
@RequiredArgsConstructor
public enum CardType {
    CHARACTER("캐릭터")
    ,SPELL("스펠")
    ,FOLLOWER("추종자");


    private final String name;

}
