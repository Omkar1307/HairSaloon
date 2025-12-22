package com.om.hairsaloon.controller;

import com.om.hairsaloon.service.MailService;
import com.om.hairsaloon.store.OTPStore;
import com.om.hairsaloon.util.OTPGenerator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins = "http://localhost:5173")
public class EmailController {

    @Autowired
    private MailService mailService;

    @Autowired
    private OTPStore otpStore;


    @PostMapping("/send-otp")
    public ResponseEntity<String> sendOtp(@RequestParam String email) {

        String otp = OTPGenerator.generateOTP(6);
        otpStore.saveOTP(email, otp);

        String subject = "Hair Saloon - Email Verification OTP";
        String body = "Your OTP is: " + otp +
                "\n\nThis OTP is valid for 5 minutes.";

        mailService.sendMail(email, subject, body);

        return ResponseEntity.ok("OTP sent successfully");
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<String> verifyOtp(
            @RequestParam String email,
            @RequestParam String otp) {

        boolean isValid = otpStore.verifyOTP(email, otp);

        if (isValid) {
            otpStore.clearOTP(email);
            return ResponseEntity.ok("OTP verified");
        }

        return ResponseEntity.badRequest().body("Invalid or expired OTP");
    }
}
