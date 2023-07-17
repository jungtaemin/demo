package com.example.kanatales_deckmaker.gachaCard.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GachaCard {

    private Long id;
    private String name;
    private String image;
    private String rarity;
    private int gacha_id;

}
