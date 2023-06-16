package com.example.kanatales_deckmaker.deck.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/deck")
public class DeckController {

    @GetMapping("/make")
    public String deckMakeForm(){
        return "/deck/deckMaker";
    }
}
