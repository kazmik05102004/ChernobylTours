package com.example.chornobl.service.sheduleofexcursion;

import com.example.chornobl.model.SheduleOfExcursion;
import com.example.chornobl.repository.SheduleOfExcursionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.lang.model.element.Element;
import java.util.List;

@Service
public class SheduleOfExcursionServiceImpl implements SheduleOfExcursionService {

    @Autowired
    private SheduleOfExcursionRepository sheduleOfExcursionRepository;
    @Override
    public List<SheduleOfExcursion> getAllExcursion() {
        return sheduleOfExcursionRepository.findAll();
    }

//    @Override
//    public void updateElementValue(int id, int numberoffreeplaces) {
//        SheduleOfExcursion sheduleOfExcursion = sheduleOfExcursionRepository.findById(id);
//        if (sheduleOfExcursion != null) {
//            sheduleOfExcursion.setNumberoffreeplaces(numberoffreeplaces);
//            sheduleOfExcursionRepository.save(sheduleOfExcursion);
//        }
//    }
}