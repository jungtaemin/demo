package com.example.kanatales_deckmaker.common.dto;

import com.example.kanatales_deckmaker.card.domain.Card;

public class CardPageFactory<T> implements PageFactory<T>{

    @Override
    public PageDto<T> pageSelect() {
        return new CardPageDto<T>();
    }
}
