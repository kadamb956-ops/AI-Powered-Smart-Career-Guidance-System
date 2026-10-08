package com.example.demo.service;

import org.springframework.stereotype.Service;

@Service
public class RoadmapService {

    private final OpenAIService openAIService;

    public RoadmapService(OpenAIService openAIService) {
        this.openAIService = openAIService;
    }

    public String generateRoadmap(
            String career,
            String skills) {

        String prompt =
                "You are an AI career mentor.\n\n" +

                "Career Goal: " + career + "\n" +
                "Current Skills: " + skills + "\n\n" +

                "Create a personalized learning roadmap.\n\n" +

                "Include:\n" +
                "1. Beginner Stage\n" +
                "2. Intermediate Stage\n" +
                "3. Advanced Stage\n" +
                "4. Projects\n" +
                "5. Certifications\n" +
                "6. Job Preparation\n\n" +

                "Keep it practical and suitable for a student.";

        return openAIService.generateResponse(prompt);
    }
}