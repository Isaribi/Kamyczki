package com.kamyczki.stone.shared;

import com.kamyczki.commons.error.ErrorException;
import com.kamyczki.commons.error.RestError;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.LinkedList;
import java.util.List;

@SuppressWarnings("unused")
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ErrorException.class)
    public ResponseEntity<RestError> handleErrorException(ErrorException ex) {
        RestError errorResponse = new RestError(ex.getCode(), ex.getMessage(), ex.getField());
        return new ResponseEntity<>(errorResponse, ex.getStatusCode());
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