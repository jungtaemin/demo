package com.example.kanatales_deckmaker.deck.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Deck {

    private Long id;
    private String name;
    private Long userId;

    private Long card1;
    private Long card2;
    private Long card3;
    private Long card4;
    private Long card5;
    private Long card6;
    private Long card7;
    private Long card8;
    private Long card9;
    private Long card10;
    private Long card11;
    private Long card12;
    private Long card13;
    private Long card14;
    private Long card15;
    private Long card16;
    private Long card17;
    private Long card18;
    private Long card19;
    private Long card20;
    private Long card21;
    private Long card22;
    private Long card23;
    private Long card24;
    private Long card25;
    private Long card26;
    private Long card27;
    private Long card28;
    private Long card29;
    private Long card30;


    public void setUserId(Long userId){
        this.userId =userId;
    }
}
