package com.om.hairsaloon.service;


import com.om.hairsaloon.entity.User;
import com.om.hairsaloon.entity.loginRequest;
import com.om.hairsaloon.repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {
    @Autowired
    userRepository userRepo;

    public boolean login(loginRequest request) {
        Optional<User> userOpt = Optional.empty();
        // Check login by email
        if (request.getEmail() != null && !request.getEmail().isEmpty()) {
            userOpt = userRepo.findByEmail(request.getEmail());
        }
// Check login by phone
        else if (request.getMobile() != null && !request.getMobile().isEmpty()) {
            userOpt = userRepo.findByMobile(request.getMobile());
        } else {
            throw new RuntimeException("Email or Phone required");
        }

        if (userOpt.isEmpty()) return false;

        User user = userOpt.get();

        // For demo purpose, plain password comparison (use hash in real app)
        return user.getPassword().equals(request.getPassword());
    }


}
