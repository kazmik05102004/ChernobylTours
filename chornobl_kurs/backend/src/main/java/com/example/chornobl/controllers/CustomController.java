package com.example.chornobl.controllers;

import com.example.chornobl.model.Сustom;
import com.example.chornobl.service.custom.CustomService;
import com.example.chornobl.service.customer.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/custom")
@CrossOrigin
public class CustomController {
    @Autowired
    private CustomService customService;

    @Secured("ROLE_USER")
    @PostMapping("/save")
    public String save(@RequestBody Сustom custom){
        customService.saveOrder(custom);
        return "New order is added";
    }

}