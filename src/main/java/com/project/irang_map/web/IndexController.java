package com.project.irang_map.web;

import java.util.List;


import com.project.irang_map.dto.KidsmapDto;
import com.project.irang_map.dto.KidsmapListResponseDto;
import com.project.irang_map.service.KidsmapService;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
public class IndexController {
    private final KidsmapService kidsmapService;
    // @GetMapping("/")
    // public String kidsmap(Model model){
    //     model.addAttribute("kidsmap", kidsmapService.findAll());
    //     return "kidsmap";
    // }
    
    // @GetMapping("/api/v1/kidsmap")
    // public List<KidsmapListResponseDto> kidsmapFindAll() {
    //     return kidsmapService.findAll();
    // }

    @GetMapping("/")
    public String kidsmap(){
        return "kidsmap";
    }

    @GetMapping("/login")
    public String login(){
        return "login";
    }
    

}
