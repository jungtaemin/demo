package com.example.kanatales_deckmaker.card.controller;

import com.example.kanatales_deckmaker.card.domain.Card;
import com.example.kanatales_deckmaker.card.service.CardService;
import com.example.kanatales_deckmaker.common.dto.PageDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/card/api")
public class CardApiController {

    private final CardService cardService;

    @GetMapping
    public ResponseEntity<PageDto<Card>> findAllPaging(@RequestParam(value = "page",required = false,defaultValue = "1") int page,
                                                       @RequestParam(value = "keyword",required = false,defaultValue = "") String keyword,
                                                       @RequestParam(value = "sort",defaultValue = "",required = false) String sort){
        return new ResponseEntity<>(cardService.findAllPaging(page,keyword,sort), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Card> findById(@PathVariable Long id){
        return new ResponseEntity<>(cardService.findById(id),HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Card>> findAllByKeyword(@RequestParam String keyword){
        return new ResponseEntity<>(cardService.findAllByKeyword(keyword),HttpStatus.OK);
    }

}
