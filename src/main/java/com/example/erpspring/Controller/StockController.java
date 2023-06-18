package com.example.erpspring.Controller;

import com.example.erpspring.Model.Stock;
import com.example.erpspring.Service.StockServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/StockController")
@CrossOrigin
public class StockController {

    @Autowired
    StockServices stockServices;

    @RequestMapping(method = RequestMethod.PUT)
    public Stock modifierStock(@RequestBody Stock a) {
        return stockServices.modifierStock(a);
    }

    @RequestMapping(value="/{id}",method = RequestMethod.DELETE)
    public void deleteStock(@PathVariable("id") Long id){
        stockServices.deleteStock(id);
    }
    @RequestMapping(method = RequestMethod.GET)
    public List<Stock> getAllStock() {
        return stockServices.getAllStock();
    }


    @RequestMapping(value="/{id}",method = RequestMethod.GET)
    public Optional <Stock> getStockById(@PathVariable("id") Long id) {
        return stockServices.getStockById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Stock createStock(@RequestBody Stock a) {
        return stockServices.createStock(a);
    }
}