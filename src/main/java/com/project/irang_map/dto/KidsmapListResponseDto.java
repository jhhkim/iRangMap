package com.project.irang_map.dto;

import com.project.irang_map.domain.Kidsmap;

import lombok.Getter;

@Getter
public class KidsmapListResponseDto {
    private Long id;
    private String store;
    private String addr;
    private String category;

    public KidsmapListResponseDto(Kidsmap entity) {
        this.id = entity.getId();
        this.store = entity.getStore();
        this.addr = entity.getAddr();
        this.category = entity.getCategory();
    }
}
