package com.example.demo.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.AIResponse;
import com.example.demo.service.RoadmapService;

@RestController
@RequestMapping("/api/roadmap")
public class RoadmapController {

    private final RoadmapService roadmapService;

    public RoadmapController(RoadmapService roadmapService) {
        this.roadmapService = roadmapService;
    }

    @PostMapping("/generate")
    public AIResponse generateRoadmap(
            @RequestBody Map<String, String> request) {

        String career = request.get("career");
        String skills = request.get("skills");

        String roadmap = roadmapService.generateRoadmap(
                career,
                skills
        );

        return new AIResponse(roadmap);
    }
}