package com.example.chornobl.service.customer;

import com.example.chornobl.model.Customer;
import com.example.chornobl.repository.СustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;

import java.util.Optional;

public interface CustomerService {

    public boolean isUserExistsByEmail(String email);
    public Customer saveCustomer(Customer customer);
    public Customer loadUserByTocken();
}
