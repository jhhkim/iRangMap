package com.project.irang_map.domain;

import java.util.List;

import com.project.irang_map.dto.KidsmapDto;
import com.project.irang_map.dto.KidsmapListResponseDto;

import org.springframework.data.jpa.repository.JpaRepository;

public interface KidsmapRepository extends JpaRepository<Kidsmap, Long> {
    List<Kidsmap> findByAddrLike(String addr);
}
