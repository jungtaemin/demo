package com.example.kanatales_deckmaker.comment.repository;

import com.example.kanatales_deckmaker.comment.domain.Comment;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CommentRepository {

    List<Comment> findAllBySharedId(Long id);

    void save(Comment comment);
}
