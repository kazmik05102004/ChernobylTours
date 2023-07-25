package com.example.chornobl.controllers;
import com.example.chornobl.model.Customer;
import com.example.chornobl.repository.СustomerRepository;
import com.example.chornobl.service.customer.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class    CustomerController {
    @Autowired
    private CustomerService customerService;
    @Autowired
    private СustomerRepository customerRepository;

    @Secured("ROLE_USER")
    @GetMapping("/getUser")
    public Customer getUser() {
        return customerService.loadUserByTocken();
    }

    @PostMapping("/add")
    public String add(@RequestBody Customer customer){
        customerService.saveCustomer(customer);
        return "New customer is added";
    }
}
