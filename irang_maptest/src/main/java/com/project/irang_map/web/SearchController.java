package com.project.irang_map.web;

import com.project.irang_map.domain.KidsmapRepository;
import com.project.irang_map.dto.KidsmapDto;

import com.project.irang_map.dto.KidsmapListResponseDto;
import com.project.irang_map.service.KidsmapService;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
@Controller
public class SearchController {
    private final KidsmapService kidsmapService;

    @PostMapping("/search")
    @ResponseBody  // json 으로 전달
    public List<KidsmapListResponseDto> serch(@RequestParam(value = "juso") String juso){
        //return "입력한 주소는?" + juso; //입력한 값 확인용
        return kidsmapService.findAllByAddr("%" + juso + "%"); // 이런걸로 리턴해야할것같은데
    }
    
    //화면에 보여줌
    @GetMapping("/search")
    public String serch(Model model, @RequestParam(value = "juso") String juso){
        model.addAttribute("kidsmap", kidsmapService.findAllByAddr("%" + juso + "%"));
        return "kidsmap";
    }

}
