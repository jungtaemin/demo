package com.example.kanatales_deckmaker.gachaCard.service;

import com.example.kanatales_deckmaker.gachaCard.domain.GachaCard;
import com.example.kanatales_deckmaker.gachaCard.repository.GachaCardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GachaCardService {

    private final GachaCardRepository gachaCardRepository;

    public List<GachaCard> findAll(Long id){
        return gachaCardRepository.findAll(id);
    }

    public List<GachaCard> findAllByRarity(GachaCard gachaCard){
        return gachaCardRepository.findAllByRarityAndgachaId(gachaCard);
    }
}
