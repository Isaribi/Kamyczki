package com.kamyczki.auth.user.dto;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class RegisterUserDto {

    @NotNull
    @NotBlank(message = "Cannot be blank")
    @Size(min = 5, max = 20)
    private final String username;

    @NotNull
    @Size(min = 10, max = 50)
    @Pattern(
            regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{10,50}$",
            message = "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    )
    private final String password;

    @NotNull
    @Email
    @NotBlank
    @Size(max = 100)
    private final String email;
}
