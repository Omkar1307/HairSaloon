package com.om.hairsaloon.store;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import org.springframework.stereotype.Component;

@Component
public class OTPStore {

    private final Map<String, String> otpMap = new HashMap<>();
    private final Map<String, LocalDateTime> expiryMap = new HashMap<>();

    public void saveOTP(String email, String otp) {
        otpMap.put(email, otp);
        expiryMap.put(email, LocalDateTime.now().plusMinutes(5));
    }

    public boolean verifyOTP(String email, String otp) {
        if (!otpMap.containsKey(email)) return false;

        if (LocalDateTime.now().isAfter(expiryMap.get(email))) {
            otpMap.remove(email);
            expiryMap.remove(email);
            return false;
        }

        return otp.equals(otpMap.get(email));
    }

    public void clearOTP(String email) {
        otpMap.remove(email);
        expiryMap.remove(email);
    }
}
