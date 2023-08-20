package com.example.kanatales_deckmaker.comment.controller;

import com.example.kanatales_deckmaker.comment.domain.Comment;
import com.example.kanatales_deckmaker.comment.dto.CommentCountListDto;
import com.example.kanatales_deckmaker.comment.service.CommentService;
import com.example.kanatales_deckmaker.deck.domain.Deck;
import com.example.kanatales_deckmaker.user.domain.UserPrincipal;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/comment/api")
public class CommentApiController {

    private final CommentService commentService;

    @GetMapping("/{sharedId}")
    public ResponseEntity<CommentCountListDto> findAllBySharedId(@PathVariable Long sharedId){
        List<Comment> allBySharedId = commentService.findAllBySharedId(sharedId);
        int allBySharedIdCount = commentService.findAllBySharedIdCount(sharedId);
        CommentCountListDto build = CommentCountListDto.builder().comment(allBySharedId)
                                                                .count(allBySharedIdCount).build();
        return new ResponseEntity<>(build, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<List<Comment>> findAllBySharedId(@AuthenticationPrincipal UserPrincipal userPrincipal,@RequestBody Comment comment) throws UserPrincipalNotFoundException {

        log.info("=================================================userPrincipal={}",userPrincipal);

        if(userPrincipal !=null){
            comment.setWriter(userPrincipal.getUsername());
            commentService.save(comment);
            return new ResponseEntity<>(HttpStatus.OK);
        }else{
            throw new UserPrincipalNotFoundException("!");
        }
    }

}
