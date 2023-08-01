package com.example.kanatales_deckmaker.common.dto;

public class BoardPageFactory<T> implements PageFactory<T>{
    @Override
    public PageDto<T> pageSelect() {
        return new BoardPageDto<>();
    }
}
