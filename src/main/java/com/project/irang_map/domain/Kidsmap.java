package com.project.irang_map.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@NoArgsConstructor
@Entity
public class Kidsmap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //가게이름
    @Column(length = 50, nullable = false)
    private String store;

    //주소
    @Column(length = 150, nullable = false)
    private String addr;

    //카테고리
    @Column(length = 50, nullable = false)
    private String category;

    @Builder
    public Kidsmap(String store, String addr, String category){
        this.store = store;
        this.addr = addr;
        this.category = category;
    }
}
