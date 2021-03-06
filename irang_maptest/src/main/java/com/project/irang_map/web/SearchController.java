package com.project.irang_map.web;

import com.project.irang_map.domain.KidsmapRepository;
import com.project.irang_map.dto.KidsmapDto;

import com.project.irang_map.dto.KidsmapListResponseDto;
import com.project.irang_map.service.KidsmapService;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.RequiredArgsConstructor;

//import java.util.HashMap;
import java.util.List;

@RequiredArgsConstructor
@Controller
public class SearchController {
    private final KidsmapService kidsmapService;

    // @PostMapping("/search1")
    // //@ResponseBody
    //     public List<KidsmapListResponseDto> search1(@RequestBody KidsmapDto kidsmapDto) {
    // //public List<KidsmapListResponseDto> search1(@RequestParam HashMap< String, Object> param) {
    //     System.out.println("asasasasasasas");
    //     return kidsmapService.findAllByAddr("%강서%"); // 이런걸로 리턴해야할것같은데
    //     //return kidsmapService.findAllByAddr("%" + param.get("juso") + "%"); // 이런걸로 리턴해야할것같은데
    // }

    // @PostMapping("/search")
    // @ResponseBody  // json 으로 전달
    // public List<KidsmapListResponseDto> search(@RequestParam(value = "juso") String juso){
    //     return kidsmapService.findAllByAddr("%" + juso + "%");
    //              // 이런걸로 리턴해야할것같은데
    // }
    
    //화면에 보여줌
    @GetMapping("/search")
    public String search(Model model, @RequestParam(value = "juso") String juso){
       model.addAttribute("kidsmap", kidsmapService.findAllByAddr("%" + juso + "%"));
       //SELECT * FROM aidb.kidsmap WHERE addr LIKE '%부산시 연제구%'
       return "kidsmap";
    }

}
