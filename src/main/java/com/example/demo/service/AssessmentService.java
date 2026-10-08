package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dto.AssessmentRequest;
import com.example.demo.entity.Assessment;
import com.example.demo.repository.AssessmentRepository;

@Service
public class AssessmentService {

    private final AssessmentRepository repository;

    public AssessmentService(AssessmentRepository repository) {
        this.repository = repository;
    }

    public Assessment evaluate(AssessmentRequest request) {

        Assessment assessment = new Assessment();

        assessment.setJavaScore(request.getJavaScore());
        assessment.setSpringBootScore(request.getSpringBootScore());
        assessment.setReactScore(request.getReactScore());
        assessment.setSqlScore(request.getSqlScore());
        assessment.setCommunicationScore(request.getCommunicationScore());
        assessment.setProblemSolvingScore(request.getProblemSolvingScore());

        return repository.save(assessment);
    }

    public List<Assessment> getAllAssessments() {
        return repository.findAll();
    }

    public Assessment getAssessmentById(Long id) {

        return repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Assessment not found"));
    }

    public void deleteAssessment(Long id) {

        if (!repository.existsById(id)) {
            throw new RuntimeException("Assessment not found");
        }

        repository.deleteById(id);
    }
}