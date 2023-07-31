package com.example.kanatales_deckmaker.shared.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/shared")
public class SharedController {

    @GetMapping
    public String main(){
        return "shared/sharedList";
    }

    @GetMapping("/{id}")
    public String detail(@PathVariable Long id,Model model){
        model.addAttribute("shared_id",id);
        return "shared/sharedDetail";
    }
}
