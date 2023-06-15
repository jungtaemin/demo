package com.example.demo.user.repository;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserRepository {

    void join();
    void login();
}
