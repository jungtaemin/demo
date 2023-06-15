package com.example.demo.card.service;

import com.example.demo.card.domain.Card;
import com.example.demo.card.repository.CardRepository;
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
}
