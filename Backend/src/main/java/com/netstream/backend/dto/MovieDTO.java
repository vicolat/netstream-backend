package com.netstream.backend.dto;

import jakarta.validation.constraints.NotBlank;

public class MovieDTO {

    @NotBlank(message = "Title cannot be empty")
    private String title;

    @NotBlank(message = "Genre cannot be empty")
    private String genre;

    private String trailerUrl;   // ✅ ADD THIS

    // Constructor
    public MovieDTO() {}

    public MovieDTO(String title, String genre, String trailerUrl) {
        this.title = title;
        this.genre = genre;
        this.trailerUrl = trailerUrl;
    }

    // Getters and Setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getTrailerUrl() {
        return trailerUrl;
    }

    public void setTrailerUrl(String trailerUrl) {
        this.trailerUrl = trailerUrl;
    }
}