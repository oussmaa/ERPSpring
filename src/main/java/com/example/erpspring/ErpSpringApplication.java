package com.example.erpspring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
@EntityScan("com.example.erpspring.Model")
public class ErpSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(ErpSpringApplication.class, args);
	}

}
