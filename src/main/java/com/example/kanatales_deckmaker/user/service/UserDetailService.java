package com.example.kanatales_deckmaker.user.service;

import com.example.kanatales_deckmaker.user.domain.User;
import com.example.kanatales_deckmaker.user.domain.UserPrincipal;
import com.example.kanatales_deckmaker.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserDetailService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User byUsername = userRepository.findByUsername(username);
        return new UserPrincipal(byUsername);
    }
}
