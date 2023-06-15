package com.example.kanatales_deckmaker.card.controller;

import com.example.kanatales_deckmaker.card.service.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/card")
public class CardController {
    private final CardService cardService;


    @GetMapping
    public String cardList(Model model){
        return "/card/cardList";
    }
}
