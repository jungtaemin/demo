package com.example.kanatales_deckmaker.deck.repository;

import com.example.kanatales_deckmaker.deck.domain.Deck;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DeckRepository {
    void saveDeck(Deck deck);
}
