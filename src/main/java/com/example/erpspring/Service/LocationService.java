package com.example.erpspring.Service;

import com.example.erpspring.Interface.LocationInterface;
import com.example.erpspring.Model.Location;
import com.example.erpspring.Model.Produit;
import com.example.erpspring.Repository.LocationReposotory;
import com.example.erpspring.Repository.ProduitRepostory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.List;
import java.util.Optional;

@Service
public class LocationService implements LocationInterface {

    @Autowired
    LocationReposotory locationReposotory;

    @Override
    public Location modifierLocation(Location location) {
        return locationReposotory.save(location);
    }

    @Override
    public void deleteLocation(Long id) {
        locationReposotory.deleteById(id);
    }

    @Override
    public List<Location> getAllLocation() {
        return locationReposotory.findAll();
    }

    @Override
    public Optional<Location> getLocationById(Long id) {
        return locationReposotory.findById(id);
    }

    @Override
    public Location createLocation(Location location) {
        return locationReposotory.save(location);
    }
}
