package com.om.hairsaloon.repository;

import com.om.hairsaloon.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);
}
