package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "assessments")
public class Assessment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer javaScore;
    private Integer springBootScore;
    private Integer reactScore;
    private Integer sqlScore;
    private Integer communicationScore;
    private Integer problemSolvingScore;

    public Assessment() {
    }

    public Long getId() {
        return id;
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