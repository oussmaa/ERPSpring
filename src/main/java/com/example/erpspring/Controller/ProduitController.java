package com.example.erpspring.Controller;

import com.example.erpspring.Model.Produit;
import com.example.erpspring.Model.Stock;
import com.example.erpspring.Service.ProduitService;
import com.example.erpspring.Service.StockServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ProduitController")
@CrossOrigin
public class ProduitController {

    @Autowired
    ProduitService produitService;

    @RequestMapping(method = RequestMethod.PUT)
    public Produit modifierProduit(@RequestBody Produit a) {
        return produitService.modifierProduit(a);
    }

    @RequestMapping(value="/{id}",method = RequestMethod.DELETE)
    public void deleteProduit(@PathVariable("id") Long id){
        produitService.deleteProduit(id);
    }
    @RequestMapping(method = RequestMethod.GET)
    public List<Produit> getAllProduit() {
        return produitService.getAllProduit();
    }
    @RequestMapping(value="/{id}",method = RequestMethod.GET)
    public Optional<Produit> getProduitById(@PathVariable("id") Long id) {
        return produitService.getProduitById(id);
    }
    @RequestMapping(method = RequestMethod.POST)
    public Produit createProduit(@RequestBody Produit a) {
        return produitService.createProduit(a);
    }

}
