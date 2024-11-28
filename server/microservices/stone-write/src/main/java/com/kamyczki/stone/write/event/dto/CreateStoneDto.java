package com.kamyczki.stone.write.event.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CreateStoneDto {

    @NotNull
    @NotBlank
    @Size(min = 1, max = 25)
    private String name;

    @Size(max = 200)
    private String description;

    @NotNull
    @NotBlank
    @Pattern(
            regexp = "^[A-Za-z0-9\\s-]+$",
            message = "Zip code may contain letters, numbers, spaces, or hyphens"
    )
    @Size(min = 3, max = 10)
    private String zipCode;
}
