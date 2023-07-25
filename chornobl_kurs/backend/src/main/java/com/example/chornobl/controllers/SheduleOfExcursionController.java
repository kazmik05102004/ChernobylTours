package com.example.chornobl.controllers;

import com.example.chornobl.model.SheduleOfExcursion;
import com.example.chornobl.repository.SheduleOfExcursionRepository;
import com.example.chornobl.service.sheduleofexcursion.SheduleOfExcursionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/sheduleOfExcursion")
@CrossOrigin(origins = "http://localhost:3000")
public class SheduleOfExcursionController {
    @Autowired
    private SheduleOfExcursionService sheduleOfExcursionService;
    private List<SheduleOfExcursion> excursions = new ArrayList<>();

    @Autowired
    private SheduleOfExcursionRepository sheduleOfExcursionRepository;

    @GetMapping("/{id}")
    public Object getExcursionById(@PathVariable("id") int sheduleofexcursionid) {
        // Виклик методу репозиторію для пошуку об'єкта за ID
        return sheduleOfExcursionRepository.findById(sheduleofexcursionid).orElse(null);
    }

    @GetMapping("excursions/{id}")
    public List<SheduleOfExcursion> getExcursionsByExcursionId(@PathVariable("id") int excursionid) {
        for(SheduleOfExcursion excursion: getAllExcursion()){
            if(excursion.getExcursionid() == excursionid) {
                excursions.add(excursion);
            }
        }
        return excursions;
    }

    @Secured("ROLE_USER")
    @GetMapping("/watch")
    public List<SheduleOfExcursion> getAllExcursion(){
        return sheduleOfExcursionService.getAllExcursion();
    }
}
