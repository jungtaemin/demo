package com.example.demo.card.controller;

import com.example.demo.card.domain.Card;
import com.example.demo.card.service.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/card")
public class CardApiController {

    private final CardService cardService;

    @GetMapping("/api")
    public ResponseEntity<List<Card>> findAll(){
        return new ResponseEntity<>(cardService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/api/{id}")
    public ResponseEntity<Card> findById(@PathVariable Long id){
        return new ResponseEntity<>(cardService.findById(id),HttpStatus.OK);
    }
}
