package com.example.kanatales_deckmaker.shared.service;

import com.example.kanatales_deckmaker.common.dto.*;
import com.example.kanatales_deckmaker.deck.domain.Deck;
import com.example.kanatales_deckmaker.shared.domain.Shared;
import com.example.kanatales_deckmaker.shared.dto.ResponseSharedDetail;
import com.example.kanatales_deckmaker.shared.repository.SharedRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SharedService {

    private final SharedRepository sharedRepository;


    public PageDto<Shared> findPagingAll(int page,String keyword){
        PageDto<Shared> sharedPageDto = new BoardPageFactory<Shared>().create();
        PageDto<Shared> pageDto = sharedPageDto.setLimitAndKeyword(page, keyword);
        List<Shared> pagingAll = sharedRepository.findPagingAll(pageDto);
        int allCount = sharedRepository.findAllCount(pageDto);
        return pageDto.ofPageParam(page, allCount, pagingAll);
    }


    public ResponseSharedDetail detail(Long id){

        ResponseSharedDetail sharedDetail= sharedRepository.findSharedAndDeckById(id);
        sharedRepository.setViewsCount(sharedDetail.viewsCount());
        return sharedDetail;
    }

    public void saveShared(Shared shared){
        sharedRepository.saveShared(shared);
    }
}
