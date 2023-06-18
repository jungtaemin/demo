package com.example.kanatales_deckmaker.deck.controller;

import com.example.kanatales_deckmaker.deck.domain.Deck;
import com.example.kanatales_deckmaker.deck.service.DeckService;
import com.example.kanatales_deckmaker.user.domain.UserPrincipal;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.nio.file.attribute.UserPrincipalNotFoundException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/deck")
@Slf4j
public class DeckApiController {

    private final DeckService deckService;

    @PostMapping
    public ResponseEntity<Deck> saveDeck(@RequestBody Deck deck, @AuthenticationPrincipal UserPrincipal userPrincipal) throws UserPrincipalNotFoundException {
        log.info("========================================================="+userPrincipal.getId(),userPrincipal.getUsername(),userPrincipal.getPassword());
        if(userPrincipal !=null){
            deckService.saveDeck(deck,userPrincipal.getId());
        }else{
            throw new UserPrincipalNotFoundException("!");
        }

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
