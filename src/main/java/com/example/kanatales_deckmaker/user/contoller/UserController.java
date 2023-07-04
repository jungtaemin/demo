package com.example.kanatales_deckmaker.user.contoller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UserController {


    @GetMapping("/loginForm")
    public String loginForm(){
        return "user/loginForm";
    }

    @GetMapping("/join")
    public String joinForm(){
        return "user/joinForm";
    }
}
