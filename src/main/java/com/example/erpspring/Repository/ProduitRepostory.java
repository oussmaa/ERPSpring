package com.example.erpspring.Repository;

import com.example.erpspring.Model.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProduitRepostory extends JpaRepository<Produit,Long> {
    @Query("SELECT e FROM Produit e WHERE e.location.StorageArea = :propertyValue or e.location.storageZone= :propertyValue or e.location.storageLocation = :propertyValue  ")
    List<Produit> findProduitByLocation_StorageArea(@Param("propertyValue") String propertyValue);
}
