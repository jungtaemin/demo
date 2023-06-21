package com.example.kanatales_deckmaker.user.repository;

import com.example.kanatales_deckmaker.user.domain.User;
import com.example.kanatales_deckmaker.user.dto.UserJoinDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserRepository {

    void join(UserJoinDto userJoinDto);
    void login();
    User findByUsername(String username);
}
