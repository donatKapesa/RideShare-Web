import axios from 'axios';

//// calling backend

const frontendUrl = 'http://localhost:8087/';
const backendUrl = 'https://sprint3-ecsee.herokuapp.com/';

var AXIOS = axios.create({
  baseURL: backendUrl
});

//function drivers()

export default {
  name: 'script',
  data() {
    return {
      drivers: [],
      activeDrivers: [],
      passengers: [],
      activePassengers: [],
      trips: [],
      activeTrips: [],
      searchTrips: '',
      searchPassengers: '',
      searchDrivers: '',
      searchActiveDriver: '',
      searchActivePassenger: '',
      searchActiveTrip: '',
      sortDrivers: false,
      sortPassengers: false
    }
  },

  created() {

    AXIOS.get(`/drivers`)
      .then(response => {
        this.drivers = response.data
      });

    AXIOS.get(`/passengers`)
      .then(response => {
        this.passengers = response.data
      });

    AXIOS.get(`/trips`)
      .then(response => {
        this.trips = response.data
      });

    AXIOS.get('/admin/operations/activeDrivers')
      .then(response => {
        this.activeDrivers = response.data;
      });

    AXIOS.get('/admin/operations/activePassengers')
      .then(response => {
        this.activePassengers = response.data;
      });

    AXIOS.get('/admin/operations/activeTrips')
      .then(response => {
        this.activeTrips = response.data;
      });
  },
  computed: {
    filteredTrips: function () {
      while (this.trips) {
        return this.trips.filter((trip) => {
          return trip.pickUpLocation.toLowerCase().includes(this.searchTrips.toLowerCase())
            || trip.destination.toLowerCase().includes(this.searchTrips.toLowerCase())
            || trip.arrivalTime.includes(this.searchTrips)
        });
      }
    },

    filteredPassengers: function () {
      while (this.passengers) {
        var a = this.passengers;
        if(this.sortPassengers == true) {
          a.sort((a, b) => a.tripCounter - b.tripCounter);
        } else {
          a.sort((a, b) => b.tripCounter - a.tripCounter);
        }
        return a.filter((passenger) => {
          return passenger.firstName.toLowerCase().includes(this.searchPassengers.toLowerCase())
            || passenger.lastName.toLowerCase().includes(this.searchPassengers.toLowerCase());
        });
      }
    },

    filteredDrivers: function () {
      while (this.drivers) {
        var array = this.drivers;
        if(this.sortDrivers == true) {
          // array.reverse();
          array.sort((a, b) => a.ranking - b.ranking);
        } else {
          array.sort((a, b) => b.ranking - a.ranking);
        }
        return array.filter((driver) => {
          return driver.firstName.toLowerCase().includes(this.searchDrivers.toLowerCase())
            || driver.lastName.toLowerCase().includes(this.searchDrivers.toLowerCase());
        });
      }
    },

    filteredActiveDrivers: function () {
      while (this.activeDrivers) {
        return this.activeDrivers.filter(activeDriver => {
          return activeDriver.firstName.toLowerCase().includes(this.searchActiveDriver.toLowerCase())
            || activeDriver.lastName.toLowerCase().includes(this.searchActiveDriver.toLowerCase());
        });
      }
    },

    filteredActivePassengers: function () {
      while (this.activePassengers) {
        return this.activePassengers.filter(activePassenger => {
          return activePassenger.firstName.toLowerCase().includes(this.searchActivePassenger.toLowerCase())
            || activePassenger.lastName.toLowerCase().includes(this.searchActivePassenger.toLowerCase());
        });
      }
    },

    filteredActiveTrips: function () {
      while (this.activeTrips) {
        return this.activeTrips.filter(activeTrip => {
          return activeTrip.pickUpLocation.toLowerCase().includes(this.searchActiveTrip.toLowerCase())
            || activeTrip.destination.toLowerCase().includes(this.searchActiveTrip.toLowerCase())
            || activeTrip.arrivalTime.toLowerCase().includes(this.searchActiveTrip.toLowerCase());
        });
      }
    }

  }
}

