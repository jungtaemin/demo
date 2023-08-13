package com.example.kanatales_deckmaker.comment.service;

import com.example.kanatales_deckmaker.comment.domain.Comment;
import com.example.kanatales_deckmaker.comment.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;

    public List<Comment> findAllBySharedId(Long id){
        return commentRepository.findAllBySharedId(id);
    }


    public void save(Comment comment){
        commentRepository.save(comment);
    }
}
