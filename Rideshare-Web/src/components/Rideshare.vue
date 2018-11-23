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
          <input type="text" v-model="searchActiveDriver" placeholder="search active drivers..." style="text-align:center; margin-bottom:30px">
        </form>
      </div>       
       
        <span>Name</span>
        <span>----</span>
        <span>Age</span>
        <ul v-for="d in filteredActiveDrivers">
          <span>{{d.firstName}} {{d.lastName}}</span>
          <span>----</span>
          <span>{{d.age}}</span>
        </ul>
      </div>

      <div class="column">

      

        <h3>Active Passengers</h3>
        <div class="medium-6 medium-offset-3 ctrl">
        <form class="searchForm" v-on:submit.prevent="submitSearch">
          <input type="text" v-model="searchActivePassenger" placeholder="search active passengers..." style="text-align:center; margin-bottom:30px">
        </form>
      </div>
      
        <span>Name</span>
        <span>----</span>
        <span>Current or Latest Trip</span>
        <ul v-for="p in filteredActivePassengers">
          <span>{{p.firstName}} {{p.lastName}}</span>
          <span>:</span>
          <span>{{ p.trip[p.trip.length - 1].pickUpLocation }}</span>
          <span>----></span>
          <span>{{ p.trip[p.trip.length - 1].destination }}</span>
          <!-- <span>{{ p.trip }}</span> -->
        </ul>
      </div>

      <div class="column">

      

        <h3>Active Routes</h3>
        <div class="medium-6 medium-offset-3 ctrl">
        <form class="searchForm" v-on:submit.prevent="submitSearch">
          <input type="text" v-model="searchActiveTrip" placeholder="search active routes..." style="text-align:center; margin-bottom:30px">
        </form>
      </div>

        <!-- add style -->
        <span>source</span>
        <span>---></span>
        <span>destination</span>
        <span>arrival time</span>
        <ul v-for="t in filteredActiveTrips">
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
          <input type="text" v-model="searchActivePassenger" placeholder="search loyal passengers..." style="text-align:center; margin-bottom:30px">
        </form>
      </div>
        <span>Name</span>
        <span>----</span>
        <span>Number of Trips</span>
        <ul v-for="p in filteredActivePassengers">
          <span>{{p.firstName}} {{p.lastName}}</span>
          <span>----</span>
          <!-- TODO: replace with p.numberOfTrips -->
          <span>{{ p.tripCounter }}</span>
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
        <ul v-for="d in filteredDrivers">
          <span>{{d.firstName}} {{d.lastName}}</span>
          <span>----</span>
          <span>{{d.ranking}}</span>
        </ul>
      </div>
      
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
        <ul v-for="t in filteredTrips">
          <span>{{ t.pickUpLocation }}</span>
          <span>---></span>
          <span>{{ t.destination }}</span>
          <span>{{ t.arrivalTime }}</span>
        </ul>
      </div>
    </div>

  </div>

    </div>

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
