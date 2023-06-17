package com.example.erpspring.Repository;

import com.example.erpspring.Model.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockReposotory extends JpaRepository<Stock,Long> {
}
