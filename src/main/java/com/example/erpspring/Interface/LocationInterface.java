package com.example.erpspring.Interface;

import com.example.erpspring.Model.Location;
import com.example.erpspring.Model.Produit;

import java.util.List;
import java.util.Optional;

public interface LocationInterface {

    Location modifierLocation(Location location);
    void deleteLocation(Long id);
    List<Location> getAllLocation();
    Optional<Location> getLocationById(Long id);
    Location createLocation(Location location);

}
