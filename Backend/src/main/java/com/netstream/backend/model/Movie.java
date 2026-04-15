package com.netstream.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "movies")
public class Movie {

    @Id
    private String id;

    private String title;
    private String genre;
    private String posterUrl;
    private String trailerUrl;

    // Empty constructor (required by Spring)
    public Movie() {}

    // Constructor with fields
    public Movie(String title, String genre, String posterUrl, String trailerUrl) {
        this.title = title;
        this.genre = genre;
        this.posterUrl = posterUrl;
        this.trailerUrl = trailerUrl;
    }

    // Getters and Setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getPosterUrl() {
        return posterUrl;
    }

    public void setPosterUrl(String posterUrl) {
        this.posterUrl = posterUrl;
    }

    public String getTrailerUrl() {
        return trailerUrl;
    }

    public void setTrailerUrl(String trailerUrl) {
        this.trailerUrl = trailerUrl;
    }
}