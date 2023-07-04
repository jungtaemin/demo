package com.example.kanatales_deckmaker.gacha.repository;

import com.example.kanatales_deckmaker.gacha.domain.Gacha;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface GachaRepository {

    List<Gacha> findAll();
}
