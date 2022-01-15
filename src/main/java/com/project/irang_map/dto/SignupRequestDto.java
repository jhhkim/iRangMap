package com.project.irang_map.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class SignupRequestDto {
    private String name;
    private String password;
    private String email;
    private boolean admin = false;
    private String adminToken = "";
}
