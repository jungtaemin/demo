package com.example.kanatales_deckmaker.comment.dto;

import com.example.kanatales_deckmaker.comment.domain.Comment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CommentCountListDto {
    private List<Comment> comment;
    private int count;
}
