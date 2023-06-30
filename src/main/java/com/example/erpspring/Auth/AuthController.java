package com.example.erpspring.Auth;

import com.example.erpspring.Model.User;
import com.example.erpspring.Repository.UserReposotory;
import com.example.erpspring.Security.JwtUtils;
import com.example.erpspring.Security.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Random;

@RestController
@RequestMapping("/User")
public class AuthController {



        @Autowired
        private AuthenticationManager authenticationManager;


        @Autowired
        private UserReposotory userReposotory;
        @Autowired
        private UserDetailsService userDetailsService;

        @Autowired
        BCryptPasswordEncoder bCryptPasswordEncoder;
        @Autowired
        private JwtUtils jwtUtil;

        @PostMapping("/login")
        public ResponseEntity<?> login(@RequestBody LoginRequest request) {
            try {
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
                );
            } catch (AuthenticationException e) {
                return ResponseEntity.status(401).body("Invalid username or password");
            }

            UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
            System.out.println(userDetails);
            String token = jwtUtil.generateToken(userDetails);

            return ResponseEntity.ok(token);
        }

    @RequestMapping(path = "createUtilisateur",method = RequestMethod.POST)
    public User createUtilisateur(@RequestBody User user ) {
            String paas=bCryptPasswordEncoder.encode(user.getPassword());
            user.setPassword(paas);
            User u=userReposotory.save(user);
            return user;
        }
    }