package com.example.smarty.config;

import com.example.smarty.model.Role;
import com.example.smarty.model.User;
import com.example.smarty.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        // Check if admin user already exists to prevent duplicates on every startup
        // FIX: Ensure the email in findByEmail matches the email being created
        if (userRepository.findByEmail("tabs.jsx@gmail.com").isEmpty()) { // <--- Corrected this line
            var adminUser = User.builder()
                    .email("tabs.jsx@gmail.com")
                    .password(passwordEncoder.encode("123")) // USE A STRONG PASSWORD IN PRODUCTION!
                    .role(Role.ADMIN)
                    .build();
            userRepository.save(adminUser);
            System.out.println("Admin user created: tabs.jsx@gmail.com");
        }

        // Check if regular user already exists
        if (userRepository.findByEmail("limitless@gmail.com").isEmpty()) {
            var regularUser = User.builder()
                    .email("limitless@gmail.com")
                    .password(passwordEncoder.encode("147")) // USE A STRONG PASSWORD IN PRODUCTION!
                    .role(Role.USER)
                    .build();
            userRepository.save(regularUser);
            System.out.println("Regular user created: limitless@gmail.com");
        }
    }
}