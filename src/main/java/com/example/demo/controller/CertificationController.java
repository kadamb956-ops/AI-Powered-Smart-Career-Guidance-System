package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Certification;
import com.example.demo.service.CertificationService;

@RestController
@RequestMapping("/api/certifications")
public class CertificationController {

    private final CertificationService service;

    public CertificationController(CertificationService service) {
        this.service = service;
    }

    @GetMapping
    public List<Certification> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Certification getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public Certification create(
            @RequestBody Certification certification) {

        return service.save(certification);
    }

    @PutMapping("/{id}")
    public Certification update(
            @PathVariable Long id,
            @RequestBody Certification certification) {

        return service.update(id, certification);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {

        service.delete(id);

        return "Certification deleted successfully";
    }
}