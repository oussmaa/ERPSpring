package com.example.erpspring.Auth;

import com.example.erpspring.Model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Objects;

@Data
public class UserDetailsImpl implements UserDetails {

        private static final long serialVersionUID = 1L;

        private Long id;

        private String username;

        private String email;


        private String Numero;
        private String Image;
        @JsonIgnore
        private String password;

        private User user;

        private String Roles;

        public UserDetailsImpl(Long id, String email, String username, String password, String numero, String image, String roles) {
            this.id = id;
            this.username = username;
            this.email = email;
            this.password = password;
            this.Numero = numero;
            this.Image=image;


            this.Roles = roles;
        }

        public static UserDetailsImpl build(User user) {


            return new UserDetailsImpl(
                    user.getId(),
                    user.getEmail(),
                    user.getUsername(),

                    user.getPassword(),
                    user.getNumero(), user.getImage(),
                    user.getRoles());
        }


        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return null;
        }

        @Override
        public String getPassword() {
            return password;
        }

        @Override
        public String getUsername() {
            return username;
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }


        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }



    }
