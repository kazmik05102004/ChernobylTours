package com.example.chornobl.controllers;

import com.example.chornobl.model.Customer;
import com.example.chornobl.service.customer.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
@CrossOrigin
@RequiredArgsConstructor

public class HelloControlle {
    @Autowired
    private CustomerService customerService;

    @GetMapping("/")
    public String add(){
        return "clown?";
    }
}