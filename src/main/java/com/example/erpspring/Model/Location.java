package com.example.erpspring.Model;

import javax.persistence.*;
import lombok.Data;
@Data
@Entity
public class Location {

        @Id
        @Column(name = "id", nullable = false)
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(name = "StorageArea", nullable = false)
        private String StorageArea;

        @Column(name = "StorageZone", nullable = false)
        private String StorageZone;

        @Column(name = "StorageLocation", nullable = false)
        private String StorageLocation;



    }


