package com.example.kanatales_deckmaker.user.service;

import com.example.kanatales_deckmaker.user.domain.User;
import com.example.kanatales_deckmaker.user.dto.UserJoinDto;
import com.example.kanatales_deckmaker.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;//bcrypt

    public void join(UserJoinDto userJoinDto){
        String password = passwordEncoder.encode(userJoinDto.getPassword());
        userJoinDto.userSetting(password);
        userRepository.join(userJoinDto);
    }
}
