package com.om.hairsaloon.service;

import com.om.hairsaloon.entity.User;
import com.om.hairsaloon.entity.User;
import com.om.hairsaloon.exception.EmailAlreadyExistsException;
import com.om.hairsaloon.repository.userRepository;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {

    private final userRepository userRepository;

    public RegisterService(userRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void registerUser(User person) {

        if (userRepository.existsByEmail(person.getEmail())) {
            throw new EmailAlreadyExistsException("Email already registered");
        }

        User user = new User();
        user.setName(person.getName());
        user.setEmail(person.getEmail());
        user.setMobile(person.getMobile());
        user.setUserType(person.getUserType());
        user.setPassword(person.getPassword()); // later encrypt

        userRepository.save(user);
    }
}

