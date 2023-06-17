package com.example.erpspring.Model;


import jakarta.persistence.*;
import lombok.Data;


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

    @OneToOne
    @JoinColumn(name = "location_id")
    private Location location;
}
