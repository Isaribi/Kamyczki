package com.kamyczki.commons.error;

import org.springframework.http.HttpStatus;
import org.springframework.lang.Nullable;

import static org.springframework.http.HttpStatus.*;

public enum ErrorCodes {
    RESOURCE_ALREADY_EXISTS("Resource %s with this %s already exists", BAD_REQUEST),
    RESOURCE_NOT_FOUND("Resource %s with %s = %s not found", NOT_FOUND),
    WRONG_PASSWORD("Wrong password for user %s", FORBIDDEN, "password");

    private final String message;
    private final HttpStatus status;
    @Nullable
    private final String field;

    ErrorCodes(String message, HttpStatus status) {
        this.message = message;
        this.status = status;
        this.field = null;
    }

    ErrorCodes(String message, HttpStatus status, String field) {
        this.message = message;
        this.status = status;
        this.field = field;
    }

    public ErrorException throwWithParam(String param) {
        return new ErrorException(this.name(), this.message.formatted(param), field, this.status);
    }

    public ErrorException throwWithObjectAndField(String entity, String field) {
        return new ErrorException(this.name(), this.message.formatted(entity, field), field, this.status);
    }

    public ErrorException throwWithObjectAndFieldAndValue(String entity, String field, String value) {
        return new ErrorException(this.name(), this.message.formatted(entity, field, value), field, this.status);
    }
}
