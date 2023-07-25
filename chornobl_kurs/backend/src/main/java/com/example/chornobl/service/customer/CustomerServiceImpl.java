package com.example.chornobl.service.customer;

import com.example.chornobl.model.Customer;
import com.example.chornobl.repository.СustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private СustomerRepository customerRepository;
    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    public boolean isUserExistsByEmail(String email) {
        Optional<Customer> user = customerRepository.findByEmail(email);
        return user != null;
    }

    @Override
    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public Customer loadUserByTocken() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof Customer) {
            Customer customer = (Customer) authentication.getPrincipal();
            return customer;
        }
        return null;
    }
}
