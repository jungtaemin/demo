package com.example.demo.card.controller;

import com.example.demo.card.domain.Card;
import com.example.demo.card.service.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

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
