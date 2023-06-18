package com.example.erpspring.Service;

import com.example.erpspring.Interface.stockInterface;
import com.example.erpspring.Model.Stock;
import com.example.erpspring.Repository.StockReposotory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StockServices implements stockInterface {

    @Autowired
    public StockReposotory stockReposotory;




    @Override
    public Stock modifierStock(Stock stock) {
        return stockReposotory.save(stock);
    }

    @Override
    public void deleteStock(Long id) {
        stockReposotory.deleteById(id);
    }

    @Override
    public List<Stock> getAllStock() {
        return stockReposotory.findAll();
    }

    @Override
    public Optional<Stock> getStockById(Long id) {
        return stockReposotory.findById(id);
    }

    @Override
    public Stock createStock(Stock stock) {
        return stockReposotory.save(stock);
    }
}
