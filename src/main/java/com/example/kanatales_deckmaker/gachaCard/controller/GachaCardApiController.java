package com.example.kanatales_deckmaker.gachaCard.controller;

import com.example.kanatales_deckmaker.gacha.domain.Gacha;
import com.example.kanatales_deckmaker.gachaCard.domain.GachaCard;
import com.example.kanatales_deckmaker.gachaCard.service.GachaCardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/gachaCard/api")
public class GachaCardApiController {

    private final GachaCardService gachaCardService;

    @GetMapping("/{id}")
    public ResponseEntity<List<GachaCard>> findById(@PathVariable Long id){
        List<GachaCard> gachaCardList = gachaCardService.findAll(id);
        return new ResponseEntity<>(gachaCardList, HttpStatus.OK);
    }

    @GetMapping("/rarity")
    public ResponseEntity<List<GachaCard>> findByrarityAndGachaId(@ModelAttribute GachaCard gachaCard){
        List<GachaCard> allByRarity = gachaCardService.findAllByRarity(gachaCard);
        return new ResponseEntity<>(allByRarity, HttpStatus.OK);
    }
}
