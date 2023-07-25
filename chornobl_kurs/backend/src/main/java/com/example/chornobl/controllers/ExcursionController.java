package com.example.chornobl.controllers;

import com.example.chornobl.model.Excursion;
import com.example.chornobl.repository.ExcursionRepository;
import com.example.chornobl.service.excursion.ExcursionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/excursion")
@CrossOrigin
public class ExcursionController {
    @Autowired
    private ExcursionRepository excursionRepository;

    @GetMapping("/{id}")
    public Object getExcursionById(@PathVariable("id") int excursionid) {
        // Виклик методу репозиторію для пошуку об'єкта за ID
        return excursionRepository.findById(excursionid).orElse(null);
    }
}