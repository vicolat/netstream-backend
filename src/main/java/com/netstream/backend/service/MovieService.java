package com.netstream.backend.service;

import com.netstream.backend.dto.MovieDTO;
import com.netstream.backend.model.Movie;
import com.netstream.backend.repository.MovieRepository;
import com.netstream.backend.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    private final MovieRepository repository;

    public MovieService(MovieRepository repository) {
        this.repository = repository;
    }

    // CREATE
    public Movie addMovie(MovieDTO dto) {

        Movie movie = new Movie();
        movie.setTitle(dto.getTitle());
        movie.setGenre(dto.getGenre());

        return repository.save(movie);
    }

    // GET ALL
    public List<Movie> getAllMovies() {
        return repository.findAll();
    }

    // GET BY ID
    public Movie getMovieById(String id) {
        return repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Movie not found with id: " + id)
                );
    }

    // UPDATE
    public Movie updateMovie(String id, MovieDTO dto) {

        Movie movie = repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Movie not found with id: " + id)
                );

        movie.setTitle(dto.getTitle());
        movie.setGenre(dto.getGenre());

        return repository.save(movie);
    }

    // DELETE
    public void deleteMovie(String id) {

        Movie movie = repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Movie not found with id: " + id)
                );

        repository.delete(movie);
    }
}