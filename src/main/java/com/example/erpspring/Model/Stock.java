package com.example.erpspring.Model;

import javax.persistence.*;
import lombok.Data;

@Data
@Entity
public class Stock {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "produit_id")
    private Produit Name_Produit;
    @OneToOne
    @JoinColumn(name = "location_id")
    private Location Location_Produit;
    private Double Quantity_Produit;
}
