package com.om.hairsaloon.util;

import java.util.Random;
public class MobOtpGenerator {

    public static String generateOtp() {
        Random random = new Random();
        return String.valueOf(100000 + random.nextInt(900000)); // 6-digit OTP
    }
}
