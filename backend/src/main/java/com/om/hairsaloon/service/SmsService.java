package com.om.hairsaloon.service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.stereotype.Service;

@Service
public class SmsService {

    private final String accountSid;
    private final String authToken;
    private final String fromNumber;

    public SmsService() {
        Dotenv dotenv = Dotenv.load(); // Load .env file
        this.accountSid = dotenv.get("TWILIO_ACCOUNT_SID");
        this.authToken = dotenv.get("TWILIO_AUTH_TOKEN");
        this.fromNumber = dotenv.get("TWILIO_PHONE_NUMBER");

        Twilio.init(accountSid, authToken);
    }

    public void sendOtp(String toNumber, String otp) {
        Message.creator(
                new PhoneNumber(toNumber),
                new PhoneNumber(fromNumber),
                "Your OTP is: " + otp
        ).create();
    }
}
