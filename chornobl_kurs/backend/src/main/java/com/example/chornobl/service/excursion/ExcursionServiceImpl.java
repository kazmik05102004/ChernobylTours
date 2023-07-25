package com.example.chornobl.service.excursion;

import com.example.chornobl.repository.ExcursionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExcursionServiceImpl implements ExcursionService{
    @Autowired
    private ExcursionRepository excursionRepository;

}
