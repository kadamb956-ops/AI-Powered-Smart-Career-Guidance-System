package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Career;
import com.example.demo.repository.CareerRepository;

@Service
public class CareerService {

    private final CareerRepository repository;

    public CareerService(CareerRepository repository) {
        this.repository = repository;
    }

    public List<Career> getAll() {
        return repository.findAll();
    }

    public Career getById(Long id) {

        return repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Career not found"));
    }

    public Career save(Career career) {
        return repository.save(career);
    }

    public Career update(Long id, Career career) {

        Career existing = getById(id);

        existing.setTitle(career.getTitle());
        existing.setDescription(career.getDescription());
        existing.setRequiredSkills(career.getRequiredSkills());
        existing.setCategory(career.getCategory());
        existing.setAverageSalary(career.getAverageSalary());

        return repository.save(existing);
    }

    public void delete(Long id) {

        if (!repository.existsById(id)) {
            throw new RuntimeException("Career not found");
        }

        repository.deleteById(id);
    }
}