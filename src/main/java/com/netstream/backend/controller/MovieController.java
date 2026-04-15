package com.netstream.backend.controller;

import com.netstream.backend.dto.MovieDTO;
import com.netstream.backend.model.Movie;
import com.netstream.backend.service.MovieService;
import com.netstream.backend.response.ApiResponse;

import jakarta.validation.Valid; // ✅ THIS FIXES @Valid

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
public class MovieController {

    private final MovieService service;

    public MovieController(MovieService service) {
        this.service = service;
    }

    // CREATE
    @PostMapping
    public ApiResponse<Movie> addMovie(@Valid @RequestBody MovieDTO dto) {
        Movie saved = service.addMovie(dto);
        return new ApiResponse<>("success", "Movie created", saved);
    }

    // GET ALL
    @GetMapping
    public ApiResponse<List<Movie>> getMovies() {
        return new ApiResponse<>("success", "All movies fetched", service.getAllMovies());
    }

    // GET BY ID
    @GetMapping("/{id}")
    public ApiResponse<Movie> getMovieById(@PathVariable String id) {
        return new ApiResponse<>("success", "Movie found", service.getMovieById(id));
    }

    // UPDATE
    @PutMapping("/{id}")
    public ApiResponse<Movie> updateMovie(@PathVariable String id, @Valid @RequestBody MovieDTO dto) {
        Movie updated = service.updateMovie(id, dto);
        return new ApiResponse<>("success", "Movie updated", updated);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ApiResponse<String> deleteMovie(@PathVariable String id) {
        service.deleteMovie(id);
        return new ApiResponse<>("success", "Movie deleted", "deleted");
    }
}