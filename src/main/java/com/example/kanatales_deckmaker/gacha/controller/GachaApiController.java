package com.example.kanatales_deckmaker.gacha.controller;

import com.example.kanatales_deckmaker.gacha.domain.Gacha;
import com.example.kanatales_deckmaker.gacha.service.GachaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/gacha")
public class GachaApiController {

    private final GachaService gachaService;

    @GetMapping
    public ResponseEntity<List<Gacha>> findAll(){
        List<Gacha> gachaList = gachaService.findAll();
        return new ResponseEntity<>(gachaList, HttpStatus.OK);
    }

}
