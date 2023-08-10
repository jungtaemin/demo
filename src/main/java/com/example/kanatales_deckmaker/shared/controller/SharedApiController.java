package com.example.kanatales_deckmaker.shared.controller;

import com.example.kanatales_deckmaker.common.dto.PageDto;
import com.example.kanatales_deckmaker.shared.domain.Shared;
import com.example.kanatales_deckmaker.shared.dto.ResponseSharedDetail;
import com.example.kanatales_deckmaker.shared.service.SharedService;
import com.example.kanatales_deckmaker.user.domain.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/shared/api")
public class SharedApiController {

    private final SharedService sharedService;

    @GetMapping
    public ResponseEntity<PageDto> pagingDeck(@RequestParam(value = "page",defaultValue = "1",required = false) int page,
                                              @RequestParam(value = "keyword",defaultValue = "",required = false) String keyword,
                                              @RequestParam(value = "sort",defaultValue = "latest",required = false)String sort){

        PageDto<Shared> pagingAll = sharedService.findPagingAll(page, keyword,sort);

        return new ResponseEntity<>(pagingAll, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody Shared shared, @AuthenticationPrincipal UserPrincipal userPrincipal){
        shared.setWriter(userPrincipal.getUsername());
        sharedService.saveShared(shared);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseSharedDetail> detail(@PathVariable Long id){
        ResponseSharedDetail detail = sharedService.detail(id);
        return new ResponseEntity<>(detail,HttpStatus.OK);
    }
}
