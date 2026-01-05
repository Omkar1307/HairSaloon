package com.om.hairsaloon.controller;

import com.om.hairsaloon.entity.loginRequest;
import com.om.hairsaloon.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody loginRequest request) {
        boolean success = authService.login(request);

        if (success) return ResponseEntity.ok("Login successful");
        else return ResponseEntity.status(401).body("Invalid credentials");
    }
}
