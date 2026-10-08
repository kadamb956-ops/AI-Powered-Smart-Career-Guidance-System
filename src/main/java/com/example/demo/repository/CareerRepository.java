package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Career;

public interface CareerRepository
        extends JpaRepository<Career, Long> {

}