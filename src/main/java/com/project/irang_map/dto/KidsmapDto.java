package com.project.irang_map.dto;

import com.project.irang_map.domain.Kidsmap;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class KidsmapDto {
    private String store;
    private String addr;
    private String category;

    @Builder
    public KidsmapDto(String store, String addr, String category) {
        this.store = store;
        this.addr = addr;
        this.category = category;

    }

    public Kidsmap toEntity() {
        return Kidsmap.builder()
                .store(store)
                .addr(addr)
                .category(category)
                .build();
    }

}