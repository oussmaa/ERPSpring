package com.example.erpspring.Model;

import javax.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Location {

        @Id
        @Column(name = "id", nullable = false)
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(name = "StorageArea")
        private String StorageArea;


         @Column(name = "StorageZone")
        private String storageZone;



        @Column(name = "StorageLocation")
        private String storageLocation;


    }


