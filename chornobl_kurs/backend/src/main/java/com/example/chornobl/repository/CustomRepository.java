package com.example.chornobl.repository;

import com.example.chornobl.model.Сustom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomRepository extends JpaRepository<Сustom, Integer> {
}
