package com.example.chornobl.auth;

import com.example.chornobl.model.Customer;
import com.example.chornobl.repository.СustomerRepository;
import com.example.chornobl.service.customer.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class AuthenticationController {
    private final СustomerRepository customerRepository;
    private final AuthenticationService service;
    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private CustomerService customerService;

    @GetMapping("/checkEmail")
    public boolean checkEmailExists(@RequestParam("email") String email) {
        Optional<Customer> user = customerRepository.findByEmail(email);
        return user.isPresent();
    }

    @PostMapping("/signUp")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request){
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/signIn")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request){
        return ResponseEntity.ok(service.authenticate(request));
    }
}
