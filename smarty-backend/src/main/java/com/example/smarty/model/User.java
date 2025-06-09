package com.example.smarty.model;



import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Data // Lombok: Generates getters, setters, toString, equals, and hashCode
@Builder // Lombok: Generates a builder pattern for object creation
@NoArgsConstructor // Lombok: Generates a no-argument constructor
@AllArgsConstructor // Lombok: Generates a constructor with all fields
@Entity // Marks this class as a JPA entity
@Table(name = "users") // Maps this entity to a database table named 'users'
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increments the ID
    private Long id;

    private  String fullname ;

    @Column(unique = true, nullable = false) // Ensures email is unique and not null
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING) // Stores the enum name (e.g., "USER", "ADMIN")
    private Role role;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {

        return email;
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