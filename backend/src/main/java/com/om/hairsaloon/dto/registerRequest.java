package com.om.hairsaloon.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class registerRequest {
    // Name
    private String name;
    // Email
    private String email;
    // Mobile
    private String mobile;
    // User Type
    private String userType;
    // Password
    private String password;
    // Confirm Password
    private String confirmPassword;
    // OTP
    private String otp;

}
