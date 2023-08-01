package com.example.kanatales_deckmaker.common.dto;

public interface PageFactory<T> {

    default PageDto<T> create(){
       return pageSelect();
    }

        PageDto<T> pageSelect();

}
