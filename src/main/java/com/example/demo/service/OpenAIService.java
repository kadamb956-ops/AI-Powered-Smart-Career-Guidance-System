package com.example.demo.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
public class OpenAIService {

    private final RestClient openAIClient;

    public OpenAIService(RestClient openAIClient) {
        this.openAIClient = openAIClient;
    }

    public String generateCareerRecommendation(
            String skills,
            String education,
            String experience) {

        String prompt =
                "You are an AI career advisor.\n\n" +

                "Skills: " + skills + "\n" +
                "Education: " + education + "\n" +
                "Experience: " + experience + "\n\n" +

                "Recommend the best career for this person.\n\n" +

                "Provide:\n" +
                "1. Recommended Career\n" +
                "2. Match Percentage\n" +
                "3. Why this career is suitable\n" +
                "4. Required Skills\n" +
                "5. Skills to Improve\n" +
                "6. Recommended Certifications\n" +
                "7. Learning Roadmap\n" +
                "8. Job Roles\n\n" +

                "Keep the answer practical and easy to understand.";

        return generateResponse(prompt);
    }

    @SuppressWarnings("unchecked")
    public String generateResponse(String prompt) {

        Map<String, Object> request = new HashMap<>();

        request.put("model", "gpt-4.1-mini");
        request.put("input", prompt);

        try {

            Map<String, Object> response =
                    openAIClient
                            .post()
                            .uri("/responses")
                            .body(request)
                            .retrieve()
                            .body(Map.class);

            if (response == null) {
                return "No response received from OpenAI.";
            }

            Object outputText = response.get("output_text");

            if (outputText != null) {
                return outputText.toString();
            }

            Object output = response.get("output");

            if (output != null) {
                return output.toString();
            }

            return response.toString();

        } catch (Exception e) {

            return "Error while communicating with OpenAI: "
                    + e.getMessage();
        }
    }
}