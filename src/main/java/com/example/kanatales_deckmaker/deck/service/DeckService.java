package com.example.kanatales_deckmaker.deck.service;

import com.example.kanatales_deckmaker.deck.domain.Deck;
import com.example.kanatales_deckmaker.deck.repository.DeckRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DeckService {

    private final DeckRepository deckRepository;

    public void saveDeck(Deck deck,Long id){
        deck.setUserId(id);
        deckRepository.saveDeck(deck);
    }

    public List<Deck> nameFindByUserId(Long id){
        return deckRepository.nameFindByUserId(id);
    }

    public Deck findById(Long id){
        return deckRepository.findById(id);
    }
}
