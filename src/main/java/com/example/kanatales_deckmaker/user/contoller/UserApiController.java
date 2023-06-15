package com.example.kanatales_deckmaker.user.contoller;

import com.example.kanatales_deckmaker.user.domain.User;
import com.example.kanatales_deckmaker.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserApiController {

    private final UserService userService;


    @PostMapping("/join")
    public ResponseEntity<User> join (@RequestBody User user){
        userService.join(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
