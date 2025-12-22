package com.om.hairsaloon.controller;

import com.om.hairsaloon.dto.registerRequest;
import com.om.hairsaloon.store.OTPStore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class registerController {

    @Autowired
    private OTPStore otpStore;

    @PostMapping("/api/register")
    public ResponseEntity<String> registerUser(@RequestBody registerRequest request) {

        // 1. Verify OTP
        if (!otpStore.verifyOTP(request.getEmail(), request.getOtp())) {
            return ResponseEntity.badRequest().body("Invalid or expired OTP");
        }

        otpStore.clearOTP(request.getEmail());

        // 2. Print user info (replace with DB save later)
        System.out.println("Name: " + request.getName());
        System.out.println("Email: " + request.getEmail());
        System.out.println("Mobile: " + request.getMobile());
        System.out.println("UserType: " + request.getUserType());
        System.out.println("Password: " + request.getPassword());

        return ResponseEntity.ok("User registered successfully");
    }
}
