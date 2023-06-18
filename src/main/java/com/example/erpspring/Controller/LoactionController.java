package com.example.erpspring.Controller;

import com.example.erpspring.Model.Location;
import com.example.erpspring.Model.Stock;
import com.example.erpspring.Service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/LoactionController")
@CrossOrigin
public class LoactionController {

    @Autowired
    LocationService locationService;

    @RequestMapping(method = RequestMethod.PUT)
    public Location modifierLocation(@RequestBody Location a) {
        return locationService.modifierLocation(a);
    }

    @RequestMapping(value="/{id}",method = RequestMethod.DELETE)
    public void deleteLocation(@PathVariable("id") Long id){
        locationService.deleteLocation(id);
    }
    @RequestMapping(method = RequestMethod.GET)
    public List<Location> getAllLocation() {
        return locationService.getAllLocation();
    }


    @RequestMapping(value="/{id}",method = RequestMethod.GET)
    public Optional<Location> getLocationById(@PathVariable("id") Long id) {
        return locationService.getLocationById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Location createLocation(@RequestBody Location a) {
        return locationService.createLocation(a);
    }




}
