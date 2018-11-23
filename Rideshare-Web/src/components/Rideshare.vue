<template>
  <div id="rideshare">
    <div id="fleetstatus">
      <h2>Fleet Status Overview</h2>

    
      

    <!-- TODO: add some styling -->
    <div class="table">
    
      <div class="column">

     

        <h3>Active Drivers</h3>
         <div class="medium-6 medium-offset-3 ctrl">
        <form class="searchForm" v-on:submit.prevent="submitSearch">
          <input type="text" v-model="searchDrivers" placeholder="search active drivers..." style="text-align:center; margin-bottom:30px">
        </form>
      </div>       
       
        <span>Name</span>
        <span>----</span>
        <span>Age</span>
        <ul v-for="d in filteredDrivers">
          <span>{{d.firstName}} {{d.lastName}}</span>
          <span>----</span>
          <span>{{d.age}}</span>
        </ul>
      </div>

      <div class="column">

      

        <h3>Active Passengers</h3>
        <div class="medium-6 medium-offset-3 ctrl">
        <form class="searchForm" v-on:submit.prevent="submitSearch">
          <input type="text" v-model="searchPassengers" placeholder="search active passengers..." style="text-align:center; margin-bottom:30px">
        </form>
      </div>
      
        <span>Name</span>
        <span>----</span>
        <span>Current or Latest Trip</span>
        <ul v-for="p in filteredPassengers">
          <span>{{p.firstName}} {{p.lastName}}</span>
          <span>----</span>
          <!-- TODO: replace with p.numberOfTrips -->
          <span>{{ p.trip[0].pickUpLocation }}</span>
        </ul>
      </div>

      <div class="column">

      

        <h3>Active Routes</h3>
        <div class="medium-6 medium-offset-3 ctrl">
        <form class="searchForm" v-on:submit.prevent="submitSearch">
          <input type="text" v-model="searchTrips" placeholder="search active routes..." style="text-align:center; margin-bottom:30px">
        </form>
      </div>

        <!-- add style -->
        <span>source</span>
        <span>---></span>
        <span>destination</span>
        <span>arrival time</span>
        <ul v-for="t in filteredTrips">
          <span>{{ t.pickUpLocation }}</span>
          <span>---></span>
          <span>{{ t.destination }}</span>
          <span>{{ t.arrivalTime }}</span>
        </ul>
      </div>
    </div>
    </div>

    <div id="rankings">
      <h1>Rankings</h1>

       

    <div class="table">
      <div class="column">
        <h3>Loyal Passengers</h3>
         <div class="medium-6 medium-offset-3 ctrl">
        <form class="searchForm" v-on:submit.prevent="submitSearch">
          <input type="text" placeholder="search loyal passengers..." style="text-align:center; margin-bottom:30px">
        </form>
      </div>
        <span>Name</span>
        <span>----</span>
        <span>Number of Trips</span>
        <ul v-for="p in passengers">
          <span>{{p.firstName}} {{p.lastName}}</span>
          <span>----</span>
          <!-- TODO: replace with p.numberOfTrips -->
          <span>{{ p.age }}</span>
        </ul>
      </div>

      

      <div class="column">
        <h3>Top Drivers</h3>
        <div class="medium-6 medium-offset-3 ctrl">
        <form class="searchForm" v-on:submit.prevent="submitSearch">
          <input type="text" v-model="searchDrivers" placeholder="search top drivers..." style="text-align:center; margin-bottom:30px">
        </form>
      </div>
        <span>Name</span>
        <span>----</span>
        <span>Rating</span>
        <!-- will try to add links for more info -->
        <!-- will sort and display them in order -->
        <!-- TODO: replace with d.rating-->
        <ul v-for="d in filteredDrivers">
          <span>{{d.firstName}} {{d.lastName}}</span>
          <span>----</span>
          <span>{{d.age}}</span>
        </ul>
      </div>

        <!-- not sure how to do this. Maybe count number of souce - destination pairs -->
        <!-- will try to link to google maps for bonus -->
      <div class="column">
        <h3>Popular Routes</h3>
       <div class="medium-6 medium-offset-3 ctrl">
        <form class="searchForm" v-on:submit.prevent="submitSearch">
          <input type="text" v-model="searchTrips" placeholder="search popular routes.." style="text-align:center; margin-bottom:30px">
        </form>
      </div>
        <!-- add style -->
        <span>source</span>
        <span>---></span>
        <span>destination</span>
        <span>arrival time</span>
        <ul v-for="t in trips">
          <span>{{ t.pickUpLocation }}</span>
          <span>---></span>
          <span>{{ t.destination }}</span>
          <span>{{ t.arrivalTime }}</span>
        </ul>
      </div>
    </div>

  </div>

    </div>

  <!-- ranking -->
  <!-- will add js to show this div only when user clicks show -->
  


</template>

<script src="./script.js">

export default {
  name: "rideshare",
  data() {
    return {
      msg: "Rideshare Application"
    };
  }
};

// const app = new Vue ({
//   el: '#rideshare',
//   search: '',
//   tripsList: trips,
//   computed: {
//     filteredList() {
//       return this.tripsList.filter(trip => {
//         return trip.pickUpLocation.toLowerCase().includes(this.search.toLowerCase())
//       })
//     }
//   }
// })

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.rideshare {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background: #f2ece8;
}

.overview {
  display: flex;
}

a {
  color: inherit;
}

.table {
  display: flex;
}

.column {
  flex-grow: 1;
}

#fleetstatus {
  margin-bottom: 50px;
}

</style>
