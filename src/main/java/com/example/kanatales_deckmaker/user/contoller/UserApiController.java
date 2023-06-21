package com.example.kanatales_deckmaker.user.contoller;

import com.example.kanatales_deckmaker.user.domain.User;
import com.example.kanatales_deckmaker.user.dto.UserJoinDto;
import com.example.kanatales_deckmaker.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class UserApiController {

    private final UserService userService;


    @PostMapping("/join")
    public ResponseEntity<User> join (@Valid @RequestBody UserJoinDto userJoinDto, BindingResult bindingResult){
        userService.join(userJoinDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
