import axios from 'axios';

//// calling backend

const frontendUrl = 'http://localhost:8087/'; // change before deploying
const backendUrl = 'https://shrouded-fjord-72003.herokuapp.com/';
//const backendUrl = 'https://sprint3-ecse321.herokuapp.com/';
//const backendUrl = 'https://eventregistration-backend-123.herokuapp.com/';

var AXIOS = axios.create({
  baseURL: backendUrl
});


////

function ParticipantDto(name) {
  this.name = name
  this.events = []
}

function EventDto(name, date, start, end) {
  this.name = name
  this.eventDate = date
  this.startTime = start
  this.endTime = end
}

//function drivers()

export default {
  name: 'script',
  data() {
    return {
      drivers: [],
      passengers: [],
      trips: [],
      searchTrips: '',
      searchPassengers: '',
      searchDrivers: '',
    }
  },

  methods: {

  },

  created() {

    AXIOS.get(`/drivers`) // change to /drivers/active once ellina is done
      .then(response => {
        //console.log(response.data);
        this.drivers = response.data
      })

    AXIOS.get(`/passengers`) // change to /passengers/active once ellina is done
      .then(response => {
        //console.log(response.data);
        this.passengers = response.data
      })

    AXIOS.get(`/trips`) //change to /trips/active once ellina is done
      .then(response => {
        console.log(response.data);
        this.trips = response.data
        //filteredItems(response.data);
        
      });

  },
  computed: {
    filteredTrips: function() {
      while(this.trips) {
        return this.trips.filter((trip) => {
          console.log(this.searchTrips);
          return trip.pickUpLocation.toLowerCase().includes(this.searchTrips)
          || trip.destination.toLowerCase().includes(this.searchTrips);
        });
      }
    },

    filteredPassengers: function() {
      while(this.passengers) {
        return this.passengers.filter((passenger) => {
          console.log(this.searchPassengers);
          return passenger.firstName.toLowerCase().includes(this.searchPassengers)
          || passenger.lastName.toLowerCase().includes(this.searchPassengers);
        });
      }
    },

    filteredDrivers: function() {
      while(this.drivers) {
        return this.drivers.filter((driver) => {
          return driver.firstName.toLowerCase().includes(this.searchDrivers)
          || driver.lastName.toLowerCase().includes(this.searchDrivers);
        });
      }
    }

  }
}

