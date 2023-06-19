package com.example.kanatales_deckmaker.deck.controller;

import com.example.kanatales_deckmaker.deck.domain.Deck;
import com.example.kanatales_deckmaker.deck.service.DeckService;
import com.example.kanatales_deckmaker.user.domain.UserPrincipal;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/deck/api")
@Slf4j
public class DeckApiController {

    private final DeckService deckService;

    @PostMapping
    public ResponseEntity<Deck> saveDeck(@RequestBody Deck deck, @AuthenticationPrincipal UserPrincipal userPrincipal) throws UserPrincipalNotFoundException {
        if(userPrincipal !=null){
            deckService.saveDeck(deck,userPrincipal.getId());
        }else{
            throw new UserPrincipalNotFoundException("!");
        }

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Deck>> deckList(@AuthenticationPrincipal UserPrincipal userPrincipal) throws UserPrincipalNotFoundException {
        if(userPrincipal !=null){
            List<Deck> deck = deckService.nameFindByUserId(userPrincipal.getId());
            return new ResponseEntity<>(deck,HttpStatus.OK);
        }else{
            throw new UserPrincipalNotFoundException("!");
        }
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<Deck> deckInCardList(@PathVariable Long id){
        Deck deckInCard = deckService.findById(id);
        return new ResponseEntity<>(deckInCard,HttpStatus.OK);
    }

}
