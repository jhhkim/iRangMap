package com.project.irang_map.domain.user;


import com.project.irang_map.domain.Timestamped;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter // get 함수를 일괄적으로 만들어줍니다.
@NoArgsConstructor // 기본 생성자를 만들어줍니다.
@Entity // DB 테이블 역할을 합니다.
public class Member extends Timestamped {

    // ID가 자동으로 생성 및 증가합니다.
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long id;

    // 반드시 값을 가지도록 합니다.

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String email;

    // 사용자의 역할(회원, 관리자)
    @Column(nullable = false)
    @Enumerated(value = EnumType.STRING)
    private Role role;

//    @Builder
    public Member(String password, String email, Role role) {
        
        this.password = password;
        this.email = email;
        this.role = role;
    }


    public String getRoleKey() {
        return this.role.getKey();
    }
}