package com.example.erpspring.Request;

import com.example.erpspring.Model.Location;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.ArrayList;

@Data
public class ProduitRequest {

    private String NameProduit;


    private Double Quanatity;


    private Double Price;


    private String Categorie;


    private String Description;


    private Integer Tax;


    private Integer Promotion;


    private ArrayList<String> Image;


    private long locationid;
}

