package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.AssessmentRequest;
import com.example.demo.entity.Assessment;
import com.example.demo.service.AssessmentService;

@RestController
@RequestMapping("/api/assessment")
public class AssessmentController {

    private final AssessmentService service;

    public AssessmentController(AssessmentService service) {
        this.service = service;
    }

    @PostMapping
    public Assessment submitAssessment(
            @RequestBody AssessmentRequest request) {

        return service.evaluate(request);
    }

    @GetMapping
    public List<Assessment> getAllAssessments() {
        return service.getAllAssessments();
    }

    @GetMapping("/{id}")
    public Assessment getAssessment(@PathVariable Long id) {
        return service.getAssessmentById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteAssessment(@PathVariable Long id) {

        service.deleteAssessment(id);

        return "Assessment deleted successfully";
    }
}