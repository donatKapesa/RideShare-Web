package ca.mcgill.ecse321.rideshare.adminOperationsController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ca.mcgill.ecse321.rideshare.driverController.DriverService;
import ca.mcgill.ecse321.rideshare.model.Driver;
import ca.mcgill.ecse321.rideshare.model.Passenger;
import ca.mcgill.ecse321.rideshare.model.Trip;
import ca.mcgill.ecse321.rideshare.passengerController.PassengerService;

@CrossOrigin
@RestController

public class AdminOperationsController {
	@Autowired
	private AdminOperationsService adminOpService;
	
	@Autowired
	private DriverService driverService;
	
	@Autowired
	private PassengerService passengerService;
	
	// @RequestMapping("/admin/operations")
	// return list of active trips, users and passengers
	// reutrn top drivers and passengers
	
	@RequestMapping("/admin/operations/trips")
	public List<Trip> getAllTrips() {
		return adminOpService.getAllTrips();
	}
	
	@RequestMapping("/admin/operations/activeTrips")
	public List<Trip> getAllActiveTrips(){
		return adminOpService.getAllActiveTrips();
	}
	
	@RequestMapping("/admin/operations/passengers")
	public List<Passenger> getAllPassengers() {
		return adminOpService.getAllPassengers();
	}
	
	@RequestMapping("/admin/operations/activePassengers")
	public List<Passenger> getAllActivePassengers(){
		return adminOpService.getAllActivePassengers();
	}
	
	@RequestMapping("/admin/operations/drivers")
	public List<Driver> getAllDrivers() {
		return adminOpService.getAllDrivers();
	}
	
	@RequestMapping("/admin/operations/activeDrivers")
	public List<Driver> getAllActiveDrivers(){
		return adminOpService.getAllActiveDrivers();
	}
}
