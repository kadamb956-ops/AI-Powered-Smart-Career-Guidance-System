package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.AIResponse;
import com.example.demo.dto.ResumeRequest;
import com.example.demo.service.ResumeService;

@RestController
@RequestMapping("/api/resume")
public class ResumeController {

    private final ResumeService resumeService;

    public ResumeController(ResumeService resumeService) {
        this.resumeService = resumeService;
    }

    @PostMapping("/analyze")
    public AIResponse analyzeResume(
            @RequestBody ResumeRequest request) {

        String result = resumeService.analyzeResume(
                request.getResumeText()
        );

        return new AIResponse(result);
    }
}