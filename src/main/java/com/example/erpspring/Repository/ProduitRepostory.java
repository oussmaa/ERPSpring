package com.example.erpspring.Repository;

import com.example.erpspring.Model.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProduitRepostory extends JpaRepository<Produit,Long> {
}
