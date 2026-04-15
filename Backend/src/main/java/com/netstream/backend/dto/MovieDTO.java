package com.netstream.backend.dto;

import jakarta.validation.constraints.NotBlank;

public class MovieDTO {

    @NotBlank(message = "Title cannot be empty")
    private String title;

    @NotBlank(message = "Genre cannot be empty")
    private String genre;

    public MovieDTO() {}

    public MovieDTO(String title, String genre) {
        this.title = title;
        this.genre = genre;
    }

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
}