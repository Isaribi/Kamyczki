package com.kamyczki.auth.authentication;


import com.kamyczki.auth.authentication.dto.SignInDto;
import com.kamyczki.auth.feign.TokenDto;
import com.kamyczki.auth.user.UserFacade;
import com.kamyczki.commons.security.UserDetailsImplDto;
import io.vavr.control.Try;
import jakarta.ws.rs.ForbiddenException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import static com.kamyczki.commons.error.ErrorCodes.WRONG_PASSWORD;

@Service
@RequiredArgsConstructor
class AuthenticationService {

    private final UserFacade userFacade;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    private final UserDetailsService userDetailsService;

    public TokenDto authenticate(SignInDto request) {
        Try.run(() -> authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        )).onFailure(AuthenticationException.class, thr -> {
            throw WRONG_PASSWORD.throwWithParam(request.getUsername());
        });

        var user = userFacade.getUserDetails(request.getUsername());
        var jwtToken = jwtService.generateToken(user);
        return new TokenDto(jwtToken);
    }

    public UserDetailsImplDto validateToken(String token) {
        var username = jwtService.extractUsername(token);

        if (username != null) {
            var userDetails = this.userDetailsService.loadUserByUsername(username);

            if (jwtService.isTokenValid(token, userDetails)) {
                return new UserDetailsImplDto(userDetails.getUsername());
            }
        }
        throw new ForbiddenException("Could not authenticate token");
    }
}
