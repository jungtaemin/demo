package com.example.kanatales_deckmaker.gachaCard.repository;

import com.example.kanatales_deckmaker.gachaCard.domain.GachaCard;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface GachaCardRepository {

    List<GachaCard> findAll(Long id);

    List<GachaCard> findAllByRarityAndgachaId(GachaCard gachaCard);
}
