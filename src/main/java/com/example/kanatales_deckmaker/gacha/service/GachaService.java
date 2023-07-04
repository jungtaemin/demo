package com.example.kanatales_deckmaker.gacha.service;

import com.example.kanatales_deckmaker.gacha.domain.Gacha;
import com.example.kanatales_deckmaker.gacha.repository.GachaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GachaService {

    private final GachaRepository gachaRepository;

    public List<Gacha> findAll(){
        return gachaRepository.findAll();
    }
}
