package com.example.erpspring.Service;

import com.example.erpspring.Interface.LocationInterface;
import com.example.erpspring.Model.Location;
import com.example.erpspring.Repository.LocationReposotory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public Location getLocationById(Long id) {
         return locationReposotory.findById(id).orElse(null);
    }

    @Override
    public Location createLocation(Location location) {
        return locationReposotory.save(location);
    }
}
