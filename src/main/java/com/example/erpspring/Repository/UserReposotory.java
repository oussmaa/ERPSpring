package com.example.erpspring.Repository;

import com.example.erpspring.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserReposotory extends JpaRepository<User, Long> {


    Optional<User> findByEmail(String email);
}
