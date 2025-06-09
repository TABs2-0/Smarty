package com.example.smarty; // THIS FILE IS TO CONFIGURE THE TESTING SECURITY RULES

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary; // Important!
import org.springframework.context.annotation.Profile; // Important!
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity // Enable Spring Security for tests
@Profile("test") // This configuration will only be active when the "test" profile is active
public class TestSecurityConfig {

    // This bean will override the main SecurityFilterChain when the "test" profile is active.
    // We make it permit all requests, effectively disabling full security for tests.
    @Bean
    @Primary // Ensures this bean is chosen over the one in SecurityConfiguration when both are present
    public SecurityFilterChain testSecurityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable) // Disable CSRF for tests
                .authorizeHttpRequests(auth -> auth.anyRequest().permitAll()); // Permit all requests

        return http.build();
    }
}