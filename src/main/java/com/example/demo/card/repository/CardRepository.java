package com.example.demo.card.repository;

import com.example.demo.card.domain.Card;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CardRepository {


    List<Card> findAll();

    Card findById(Long id);
}
