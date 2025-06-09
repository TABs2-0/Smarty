package com.example.smarty.repository;

import com.example.smarty.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

// JpaRepository provides standard CRUD operations out of the box
public interface UserRepository extends JpaRepository<User, Long> {

    // Custom method to find a user by their email
    Optional<User> findByEmail(String email);
    //Boolean existsByUsername(String username);
    //Boolean existsByEmail(String email);
}