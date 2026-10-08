package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Certification;
import com.example.demo.repository.CertificationRepository;

@Service
public class CertificationService {

    private final CertificationRepository repository;

    public CertificationService(CertificationRepository repository) {
        this.repository = repository;
    }

    public List<Certification> getAll() {
        return repository.findAll();
    }

    public Certification getById(Long id) {

        return repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Certification not found"));
    }

    public Certification save(Certification certification) {
        return repository.save(certification);
    }

    public Certification update(
            Long id,
            Certification certification) {

        Certification existing = getById(id);

        existing.setName(certification.getName());
        existing.setProvider(certification.getProvider());
        existing.setLevel(certification.getLevel());
        existing.setDescription(certification.getDescription());
        existing.setUrl(certification.getUrl());

        return repository.save(existing);
    }

    public void delete(Long id) {

        if (!repository.existsById(id)) {
            throw new RuntimeException("Certification not found");
        }

        repository.deleteById(id);
    }
}
