package com.om.hairsaloon.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;

@Service
public class SmsService {

    @Value("${twilio.account.sid}")
    private String accountSid;

    @Value("${twilio.auth.token}")
    private String authToken;

    @Value("${twilio.phone.number}")
    private String fromNumber;

    public void sendOtp(String toPhone, String otp) {
        Twilio.init(accountSid, authToken);

        Message.creator(
                new com.twilio.type.PhoneNumber(toPhone),
                new com.twilio.type.PhoneNumber(fromNumber),
                "Your OTP is: " + otp
        ).create();
    }
}
