package com.example.demo.dto;

public class AssessmentRequest {

    private Integer javaScore;
    private Integer springBootScore;
    private Integer reactScore;
    private Integer sqlScore;
    private Integer communicationScore;
    private Integer problemSolvingScore;

    public AssessmentRequest() {
    }

    public Integer getJavaScore() {
        return javaScore;
    }

    public void setJavaScore(Integer javaScore) {
        this.javaScore = javaScore;
    }

    public Integer getSpringBootScore() {
        return springBootScore;
    }

    public void setSpringBootScore(Integer springBootScore) {
        this.springBootScore = springBootScore;
    }

    public Integer getReactScore() {
        return reactScore;
    }

    public void setReactScore(Integer reactScore) {
        this.reactScore = reactScore;
    }

    public Integer getSqlScore() {
        return sqlScore;
    }

    public void setSqlScore(Integer sqlScore) {
        this.sqlScore = sqlScore;
    }

    public Integer getCommunicationScore() {
        return communicationScore;
    }

    public void setCommunicationScore(Integer communicationScore) {
        this.communicationScore = communicationScore;
    }

    public Integer getProblemSolvingScore() {
        return problemSolvingScore;
    }

    public void setProblemSolvingScore(Integer problemSolvingScore) {
        this.problemSolvingScore = problemSolvingScore;
    }
}