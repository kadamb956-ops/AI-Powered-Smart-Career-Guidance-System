package com.example.demo.service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.example.demo.entity.ResumeAnalysis;
import com.example.demo.repository.ResumeAnalysisRepository;

@Service
public class ResumeService {

    private final OpenAIService openAIService;
    private final ResumeAnalysisRepository repository;

    public ResumeService(
            OpenAIService openAIService,
            ResumeAnalysisRepository repository) {

        this.openAIService = openAIService;
        this.repository = repository;
    }

    public String analyzeResume(String resumeText) {

        String prompt =
                "You are an expert resume analyzer.\n\n" +

                "Analyze the following resume:\n\n" +
                resumeText + "\n\n" +

                "Provide:\n" +
                "1. Resume Score out of 100\n" +
                "2. Technical Skills\n" +
                "3. Missing Skills\n" +
                "4. Strengths\n" +
                "5. Weaknesses\n" +
                "6. ATS Suggestions\n" +
                "7. Recommended Job Roles\n" +
                "8. Improvement Suggestions\n";

        String result = openAIService.generateResponse(prompt);

        ResumeAnalysis analysis = new ResumeAnalysis();

        analysis.setResumeText(resumeText);
        analysis.setAnalysis(result);
        analysis.setAnalyzedAt(LocalDateTime.now());

        repository.save(analysis);

        return result;
    }
}