package com.example.kanatales_deckmaker.deck.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/deck")
public class DeckController {

    @GetMapping("/make")
    public String deckMakeForm(){
        return "/deck/deckMaker";
    }
    @GetMapping("/list")
    public String deckListForm(){
        return "/deck/deckList";
    }


}
