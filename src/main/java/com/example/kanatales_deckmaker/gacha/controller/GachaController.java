package com.example.kanatales_deckmaker.gacha.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/gacha")
public class GachaController {

    @GetMapping
    public String main(){
        return "gacha/gachaMain";
    }
}
