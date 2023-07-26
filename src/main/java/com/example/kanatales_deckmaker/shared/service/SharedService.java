package com.example.kanatales_deckmaker.shared.service;

import com.example.kanatales_deckmaker.common.dto.PageDto;
import com.example.kanatales_deckmaker.deck.domain.Deck;
import com.example.kanatales_deckmaker.shared.domain.Shared;
import com.example.kanatales_deckmaker.shared.repository.SharedRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SharedService {

    private final SharedRepository sharedRepository;


    public PageDto<Shared> findPagingAll(int page,String keyword){
        PageDto<Shared> pageDto = new PageDto<Shared>().setLimitAndKeyword(page, keyword);
        List<Shared> pagingAll = sharedRepository.findPagingAll(pageDto);
        int allCount = sharedRepository.findAllCount(pageDto);
        return pageDto.ofPageParam(page, allCount, pagingAll);
    }

    public void saveShared(Shared shared){
        sharedRepository.saveShared(shared);
    }
}
