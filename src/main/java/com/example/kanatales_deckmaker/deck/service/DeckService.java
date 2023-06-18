package com.example.kanatales_deckmaker.deck.service;

import com.example.kanatales_deckmaker.deck.domain.Deck;
import com.example.kanatales_deckmaker.deck.repository.DeckRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DeckService {

    private final DeckRepository deckRepository;

    public void saveDeck(Deck deck,Long id){
        deck.setUserId(id);
        deckRepository.saveDeck(deck);
    }
}
