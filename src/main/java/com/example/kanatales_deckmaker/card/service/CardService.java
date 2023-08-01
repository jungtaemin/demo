package com.example.kanatales_deckmaker.card.service;

import com.example.kanatales_deckmaker.card.domain.Card;
import com.example.kanatales_deckmaker.card.repository.CardRepository;
import com.example.kanatales_deckmaker.common.dto.CardPageDto;
import com.example.kanatales_deckmaker.common.dto.CardPageFactory;
import com.example.kanatales_deckmaker.common.dto.PageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class CardService {

    private final CardRepository cardRepository;


    public List<Card> findAll(){
        return cardRepository.findAll();
    }

    public Card findById(Long id){
        return cardRepository.findById(id);
    }

    public List<Card> findAllByKeyword(String keyword){

        return cardRepository.findAllByKeyword(keyword);
    }

    public PageDto<Card> findAllPaging(int page,String keyword){
        PageDto<Card> pageDtoCard = new CardPageFactory<Card>().create();
        PageDto<Card> pageDto = pageDtoCard.setLimitAndKeyword(page,keyword);
        List<Card> allPaging = cardRepository.findAllPaging(pageDto);
        int allCount = cardRepository.findAllCount(pageDto);
        return pageDto.ofPageParam(page,allCount,allPaging);
    }
}
