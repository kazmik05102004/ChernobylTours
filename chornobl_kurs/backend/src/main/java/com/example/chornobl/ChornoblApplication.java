package com.example.chornobl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableJpaRepositories("com.example.chornobl.repository")
@EntityScan("com.example.chornobl.model")
public class ChornoblApplication {

    public static void main(String[] args) {
        SpringApplication.run(ChornoblApplication.class, args);
    }

}
