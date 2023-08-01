package com.example.kanatales_deckmaker.common.dto;

//게시판용 페이징
public class BoardPageDto<T> extends PageDto<T>{


    public BoardPageDto() {
        setPageLimit(10);
        setBlockLimit(5);
    }
}
