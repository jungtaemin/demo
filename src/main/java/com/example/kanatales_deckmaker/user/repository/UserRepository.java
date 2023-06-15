package com.example.kanatales_deckmaker.user.repository;

import com.example.kanatales_deckmaker.user.domain.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserRepository {

    void join(User user);
    void login();
    User findByUsername(String username);
}
