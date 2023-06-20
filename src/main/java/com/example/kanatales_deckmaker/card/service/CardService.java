package com.example.kanatales_deckmaker.card.service;

import com.example.kanatales_deckmaker.card.domain.Card;
import com.example.kanatales_deckmaker.card.repository.CardRepository;
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
}
