package com.netstream.backend.controller;

import com.netstream.backend.dto.MovieDTO;
import com.netstream.backend.response.ApiResponse;
import com.netstream.backend.service.MovieService;
import com.netstream.backend.model.Movie;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
@CrossOrigin(origins = "*")
public class MovieController {

    private final MovieService service;

    public MovieController(MovieService service) {
        this.service = service;
    }

    // CREATE MOVIE
    @PostMapping
    public ApiResponse<Movie> addMovie(@RequestBody MovieDTO dto) {
        Movie saved = service.addMovie(dto);
        return new ApiResponse<>("success", "Movie created", saved);
    }

    // GET ALL MOVIES
    @GetMapping
    public ApiResponse<List<Movie>> getMovies() {
        return new ApiResponse<>("success", "All movies fetched", service.getAllMovies());
    }

    // GET MOVIE BY ID
    @GetMapping("/{id}")
    public ApiResponse<Movie> getMovieById(@PathVariable String id) {
        return new ApiResponse<>("success", "Movie found", service.getMovieById(id));
    }

    // UPDATE MOVIE
    @PutMapping("/{id}")
    public ApiResponse<Movie> updateMovie(@PathVariable String id, @RequestBody MovieDTO dto) {
        return new ApiResponse<>("success", "Movie updated", service.updateMovie(id, dto));
    }

    // DELETE MOVIE
    @DeleteMapping("/{id}")
    public ApiResponse<String> deleteMovie(@PathVariable String id) {
        service.deleteMovie(id);
        return new ApiResponse<>("success", "Movie deleted", "deleted");
    }
}