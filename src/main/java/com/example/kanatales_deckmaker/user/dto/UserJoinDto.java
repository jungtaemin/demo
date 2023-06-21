package com.example.kanatales_deckmaker.user.dto;

import com.example.kanatales_deckmaker.user.domain.RoleType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserJoinDto {
    @NotBlank(message = "아이디를 입력해주세요.")
    private String username;
    @NotBlank(message = "닉네임을 입력해주세요.")
    private String nickname;
    @NotBlank(message = "비밀번호를 입력해주세요.")
    private String password;
    private RoleType role;


    public void userSetting(String password){
        this.role = RoleType.ROLE_USER;
        this.password = password;
    }

    public void adminSetting(String password){
        this.role = RoleType.ROLE_ADMIN;
        this.password = password;
    }
}
