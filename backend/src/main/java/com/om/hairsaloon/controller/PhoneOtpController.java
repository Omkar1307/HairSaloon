package com.om.hairsaloon.controller;

import com.om.hairsaloon.entity.PhoneOtpRequest;
import com.om.hairsaloon.service.SmsService;
import com.om.hairsaloon.store.MobOtpStore;
import com.om.hairsaloon.util.MobOtpGenerator;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/phone")
@CrossOrigin(origins = "http://localhost:5173")
public class PhoneOtpController {

    private final SmsService smsService;

    public PhoneOtpController(SmsService smsService) {
        this.smsService = smsService;
    }

    @PostMapping("/send-otp")
    public String sendOtp(@RequestBody PhoneOtpRequest request) {
        String otp = MobOtpGenerator.generateOtp();

        MobOtpStore.saveOtp(request.getPhone(), otp);
        smsService.sendOtp(request.getPhone(), otp);

        return "OTP sent successfully";
    }

    @PostMapping("/verify-otp")
    public String verifyOtp(@RequestParam String phone,
                            @RequestParam String otp) {

        boolean isValid = MobOtpStore.validateOtp(phone, otp);

        if (isValid) {
            return "Phone verified successfully";
        }
        return "Invalid or expired OTP";
    }
}
