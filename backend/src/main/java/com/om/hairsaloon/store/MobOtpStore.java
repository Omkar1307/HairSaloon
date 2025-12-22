package com.om.hairsaloon.store;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

public class MobOtpStore {


    public static Map<String, String> otpMap = new HashMap<>();
    public static Map<String, LocalDateTime> expiryMap = new HashMap<>();

    public static void saveOtp(String phone, String otp) {
        otpMap.put(phone, otp);
        expiryMap.put(phone, LocalDateTime.now().plusMinutes(5)); // valid 5 min
    }

    public static boolean validateOtp(String phone, String otp) {
        if (!otpMap.containsKey(phone)) return false;

        if (LocalDateTime.now().isAfter(expiryMap.get(phone))) {
            otpMap.remove(phone);
            expiryMap.remove(phone);
            return false;
        }

        return otpMap.get(phone).equals(otp);
    }
}
