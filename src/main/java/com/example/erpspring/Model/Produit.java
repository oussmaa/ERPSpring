package com.example.erpspring.Model;


import javax.persistence.*;
import lombok.Data;

import java.util.ArrayList;


@Data
@Entity
public class Produit {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NameProduit", nullable = false)
    private String NameProduit;

    @Column(name = "Quanatity", nullable = false)
    private Double Quanatity;

    @Column(name = "Price", nullable = false)
    private Double Price;

    @Column(name = "Categorie", nullable = false)
    private String Categorie;

    @Column(name = "Description", nullable = false)
    private String Description;

    @Column(name = "Tax", nullable = false)
    private Integer Tax;

    @Column(name = "Promotion", nullable = false)
    private Integer Promotion;

    @Column(name = "Image", nullable = false)
    private ArrayList<String> Image;

    @ManyToOne
    @JoinColumn(name = "location_id")
    private Location location;
}
