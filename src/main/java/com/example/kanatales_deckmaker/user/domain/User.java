package com.example.kanatales_deckmaker.user.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/** 회원가입 유저 */
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {

    private Long id;
    private String username;
    private String nickname;
    private String password;
    private RoleType role;
    private String createDate;


    public void userSetting(String password){
        this.role = RoleType.ROLE_USER;
        this.password = password;
    }

    public void adminSetting(String password){
        this.role = RoleType.ROLE_ADMIN;
        this.password = password;
    }
}
