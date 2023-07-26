package com.example.kanatales_deckmaker.shared.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/shared")
public class SharedController {

    @GetMapping
    public String main(){
        return "shared/sharedList";
    }
}
