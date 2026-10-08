package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.AIResponse;
import com.example.demo.dto.CareerRequest;
import com.example.demo.entity.Career;
import com.example.demo.service.CareerService;
import com.example.demo.service.OpenAIService;

@RestController
@RequestMapping("/api/careers")
public class CareerController {

    private final CareerService careerService;
    private final OpenAIService openAIService;

    public CareerController(
            CareerService careerService,
            OpenAIService openAIService) {

        this.careerService = careerService;
        this.openAIService = openAIService;
    }

    @GetMapping
    public List<Career> getCareers() {
        return careerService.getAll();
    }

    @GetMapping("/{id}")
    public Career getCareer(@PathVariable Long id) {
        return careerService.getById(id);
    }

    @PostMapping
    public Career createCareer(@RequestBody Career career) {
        return careerService.save(career);
    }

    @PutMapping("/{id}")
    public Career updateCareer(
            @PathVariable Long id,
            @RequestBody Career career) {

        return careerService.update(id, career);
    }

    @DeleteMapping("/{id}")
    public String deleteCareer(@PathVariable Long id) {

        careerService.delete(id);

        return "Career deleted successfully";
    }

    @PostMapping("/recommend")
    public AIResponse recommendCareer(
            @RequestBody CareerRequest request) {

        String result = openAIService.generateCareerRecommendation(
                request.getSkills(),
                request.getEducation(),
                request.getExperience()
        );

        return new AIResponse(result);
    }
}