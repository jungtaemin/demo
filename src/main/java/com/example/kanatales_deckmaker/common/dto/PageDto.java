package com.example.kanatales_deckmaker.common.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class PageDto<T> {

    private int page;
    private int maxPage;

    private int startPage;
    private int endPage;

    private List<T> pageData;

    private int pageLimit;
    private int blockLimit;

    private String keyword;

    public PageDto<T> setLimitAndKeyword(int page,String keyword){
        this.page = (page-1) * pageLimit;
        this.keyword = keyword;
        return this;
    }

    public PageDto<T> setPageLimit(int limit){
        this.pageLimit = limit;
        return this;
    }

    // @Param 전체count+page(범용성있게 쓰려고 만듬)
    public PageDto<T> ofPageParam(int page, int boardCount, List<T> pagingList){
        this.page = page;
        // 전체 페이지 갯수 계산(10/3=3.33333 => 4)
        this.maxPage = (int) (Math.ceil((double) boardCount / pageLimit));
        // 시작 페이지 값 계산(1, 4, 7, 10, ~~~~)
        this.startPage = (((int)(Math.ceil((double) page / blockLimit))) - 1) * blockLimit + 1;
        // 끝 페이지 값 계산(3, 6, 9, 12, ~~~~)
        this.endPage = startPage + blockLimit - 1;
        if (this.endPage > this.maxPage) {
            this.endPage = this.maxPage;
        }
        this.pageData = pagingList;
        return this;
    }
}
