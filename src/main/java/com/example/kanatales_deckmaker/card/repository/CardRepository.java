package com.example.kanatales_deckmaker.card.repository;

import com.example.kanatales_deckmaker.card.domain.Card;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CardRepository {


    List<Card> findAll();

    Card findById(Long id);

    List<Card> findAllByKeyword(String keyword);
}
