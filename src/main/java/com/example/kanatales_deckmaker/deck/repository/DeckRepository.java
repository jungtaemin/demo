package com.example.kanatales_deckmaker.deck.repository;

import com.example.kanatales_deckmaker.deck.domain.Deck;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface DeckRepository {
    void saveDeck(Deck deck);

    List<Deck> nameFindByUserId(Long id);

    Deck findById(Long id);
}
