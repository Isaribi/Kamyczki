package com.kamyczki.gateway.exception;

import com.kamyczki.commons.error.ErrorException;
import com.kamyczki.commons.error.RestError;
import feign.FeignException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.context.request.WebRequest;

import java.util.LinkedList;
import java.util.List;

import static org.springframework.http.HttpStatus.BAD_GATEWAY;
import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;

@SuppressWarnings("unused")
@ControllerAdvice
class GlobalExceptionHandler {

    @ExceptionHandler(FeignException.class)
    ResponseEntity<RestError> handleFeignException(FeignException ex) {
        var errorResponse = new RestError(
                "FEIGN_CLIENT_ERROR",
                "Feign Error: " + ex.getMessage()
        );
        return new ResponseEntity<>(errorResponse, BAD_GATEWAY);
    }

    @ExceptionHandler(HttpClientErrorException.class)
    ResponseEntity<RestError> handleHttpClientError(HttpClientErrorException ex) {
        var errorResponse = new RestError(
                "HTTP_CLIENT_ERROR",
                "Client Error: " + ex.getMessage()
        );
        return new ResponseEntity<>(errorResponse, ex.getStatusCode());
    }

    @ExceptionHandler(ErrorException.class)
    ResponseEntity<RestError> handleErrorException(ErrorException ex, WebRequest request) {
        RestError errorResponse = new RestError(ex.getCode(), ex.getMessage());
        return new ResponseEntity<>(errorResponse, ex.getStatusCode());
    }

    @ExceptionHandler(Exception.class)
    ResponseEntity<RestError> handleErrorException(Exception ex) {
        RestError errorResponse = new RestError("UNEXPECTED_ERROR", ex.getMessage());
        return new ResponseEntity<>(errorResponse, INTERNAL_SERVER_ERROR);
    }


    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<List<RestError>> handleValidationExceptions(
            MethodArgumentNotValidException ex) {

        List<RestError> errors = new LinkedList<>();

        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            RestError errorResponse = new RestError("VALIDATION_ERROR", error.getDefaultMessage(), ((FieldError) error).getField());
            errors.add(errorResponse);
        });

        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }
}