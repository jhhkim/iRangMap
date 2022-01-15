package com.project.irang_map.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.project.irang_map.domain.Kidsmap;
import com.project.irang_map.domain.KidsmapRepository;
import com.project.irang_map.dto.KidsmapDto;
import com.project.irang_map.dto.KidsmapListResponseDto;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class KidsmapService {
    private final KidsmapRepository kidsmapRepository;

    @Transactional(readOnly = true)
    public List<KidsmapListResponseDto> findAllByAddr(String juso) {
        return kidsmapRepository.findByAddrLike(juso).stream()
                .map(KidsmapListResponseDto::new)
                .collect(Collectors.toList());
    }

    public List<KidsmapListResponseDto> findAll() {
        return kidsmapRepository.findAll().stream()
        .map(KidsmapListResponseDto::new)
        .collect(Collectors.toList());
    }

    

    

}
