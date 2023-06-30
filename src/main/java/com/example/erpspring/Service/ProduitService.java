package com.example.erpspring.Service;

import com.example.erpspring.Interface.ProduitIInterface;
import com.example.erpspring.Model.Produit;
import com.example.erpspring.Repository.ProduitRepostory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProduitService implements ProduitIInterface {
    private static final Logger logger = LoggerFactory.getLogger(ProduitService.class);

    @Autowired
    ProduitRepostory produitRepostory;


    @Override
    public Produit modifierProduit(Produit produit) {
        return produitRepostory.save(produit);
    }

    @Override
    public void deleteProduit(Long id) {
        produitRepostory.deleteById(id);
    }

    @Override
    public List<Produit> getAllProduit() {
        return produitRepostory.findAll();
    }

    @Override
    public Optional<Produit> getProduitById(Long id) {
        return produitRepostory.findById(id);
    }

    @Override
    public Produit createProduit(Produit produit) {

         try {
             return produitRepostory.save(produit);

         }catch (Exception e)
         {
             logger.error(e.getMessage());
         }
        return produit;
    }
}
