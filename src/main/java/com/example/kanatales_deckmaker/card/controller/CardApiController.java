package com.example.kanatales_deckmaker.card.controller;

import com.example.kanatales_deckmaker.card.domain.Card;
import com.example.kanatales_deckmaker.card.service.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/card/api")
public class CardApiController {

    private final CardService cardService;

    @GetMapping
    public ResponseEntity<List<Card>> findAll(){
        return new ResponseEntity<>(cardService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Card> findById(@PathVariable Long id){
        return new ResponseEntity<>(cardService.findById(id),HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Card>> findAllByKeyword(@RequestParam String keyword){
        return new ResponseEntity<>(cardService.findAllByKeyword(keyword),HttpStatus.OK);
    }
}
