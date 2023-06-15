package com.example.kanatales_deckmaker.common.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class RestExceptionHandler {


    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity<String> usernameNotFoundException(UsernameNotFoundException e){
        return new ResponseEntity<>("아이디 또는 비밀번호를 잘못 입력했습니다.\n" +
                "입력하신 내용을 다시 확인해주세요.", HttpStatus.BAD_REQUEST);
    }
}
