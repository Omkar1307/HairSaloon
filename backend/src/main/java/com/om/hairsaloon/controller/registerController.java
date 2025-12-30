package com.om.hairsaloon.controller;

import com.om.hairsaloon.entity.User;
import com.om.hairsaloon.service.RegisterService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class registerController {

    private final RegisterService registerService;

    public registerController(RegisterService registerService) {
        this.registerService = registerService;
    }

    @PostMapping("/api/register")
    public ResponseEntity<String> registerUser(@RequestBody User request) {

        registerService.registerUser(request);

        return ResponseEntity.ok("User registered successfully");
    }
}
