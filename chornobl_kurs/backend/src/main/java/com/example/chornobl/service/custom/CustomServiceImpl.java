package com.example.chornobl.service.custom;

import com.example.chornobl.model.Сustom;
import com.example.chornobl.repository.CustomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomServiceImpl implements CustomService {
    @Autowired
    private CustomRepository customRepository;

    @Override
    public Сustom saveOrder(Сustom custom) {
        return customRepository.save(custom);
    }
}
