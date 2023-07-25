package com.example.chornobl.repository;

import com.example.chornobl.model.SheduleOfExcursion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SheduleOfExcursionRepository extends JpaRepository<SheduleOfExcursion, Integer> {
}
