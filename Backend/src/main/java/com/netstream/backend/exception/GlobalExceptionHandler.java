package com.netstream.backend.exception;

import com.netstream.backend.response.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    // =========================
    // Handle validation errors (@Valid)
    // =========================
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiResponse<Map<String, String>> handleValidationErrors(MethodArgumentNotValidException ex) {

        Map<String, String> errors = new HashMap<>();

        ex.getBindingResult().getFieldErrors().forEach(error ->
                errors.put(error.getField(), error.getDefaultMessage())
        );

        return new ApiResponse<>(
                "error",
                "Validation failed",
                errors
        );
    }

    // =========================
    // Handle custom not found exception
    // =========================
    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ApiResponse<String> handleNotFound(ResourceNotFoundException ex) {

        return new ApiResponse<>(
                "error",
                ex.getMessage(),
                null
        );
    }

    // =========================
    // Handle all other exceptions (IMPORTANT)
    // =========================
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ApiResponse<String> handleGenericException(Exception ex) {

        ex.printStackTrace(); // 👈 shows real error in terminal

        return new ApiResponse<>(
                "error",
                ex.getMessage(),
                null
        );
    }
}