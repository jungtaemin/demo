package com.example.kanatales_deckmaker.shared.repository;

import com.example.kanatales_deckmaker.common.dto.PageDto;
import com.example.kanatales_deckmaker.deck.domain.Deck;
import com.example.kanatales_deckmaker.shared.domain.Shared;
import com.example.kanatales_deckmaker.shared.dto.ResponseSharedDetail;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SharedRepository {
    List<Shared> findPagingAll(PageDto<Shared> pageDto);
    int findAllCount(PageDto<Shared> pageDto);
    void saveShared(Shared shared);

    ResponseSharedDetail findSharedAndDeckById(Long id);
}
