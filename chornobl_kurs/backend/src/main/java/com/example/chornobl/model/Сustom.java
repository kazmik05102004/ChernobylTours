package com.example.chornobl.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "custom")
public class Сustom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int excursionid;
    private int sheduleofexcursionid;
    private int customerid;
}

