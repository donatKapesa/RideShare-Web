<template>
  <div id="rideshare">
    <div id="fleetstatus">
      <h2>Fleet Status Overview</h2>

      <div class="medium-6 medium-offset-3 ctrl">
        <form class="searchForm" v-on:submit.prevent="submitSearch">
          <input type="text" placeholder="search..." style="text-align:center; margin-bottom:30px">
        </form>
      </div>
      

    <!-- TODO: add some styling -->
    <div class="table">
    
      <div class="column">

      <div class="medium-6 medium-offset-3 ctrl">
        <form class="searchForm" v-on:submit.prevent="submitSearch">
          <input type="text" placeholder="search drivers..." style="text-align:center; margin-bottom:30px">
        </form>
      </div>

        <h3>ACTIVE DRIVERS</h3>
        <span>Name</span>
        <span>----</span>
        <span>Age</span>
        <ul v-for="d in drivers">
          <span>{{d.firstName}} {{d.lastName}}</span>
          <span>----</span>
          <span>{{d.age}}</span>
        </ul>
      </div>

      <div class="column">

      <div class="medium-6 medium-offset-3 ctrl">
        <form class="searchForm" v-on:submit.prevent="submitSearch">
          <input type="text" placeholder="search passengers..." style="text-align:center; margin-bottom:30px">
        </form>
      </div>

        <h3>ACTIVE PASSENGERS</h3>
        <span>Name</span>
        <span>----</span>
        <span>Current or Latest Trip</span>
        <ul v-for="p in passengers">
          <span>{{p.firstName}} {{p.lastName}}</span>
          <span>----</span>
          <!-- TODO: replace with p.numberOfTrips -->
          <span>{{ p.trip[0].pickUpLocation }}</span>
        </ul>
      </div>

      <div class="column">

      <div class="medium-6 medium-offset-3 ctrl">
        <form class="searchForm" v-on:submit.prevent="submitSearch">
          <input type="text" placeholder="search routes..." style="text-align:center; margin-bottom:30px">
        </form>
      </div>

        <h3>ACTIVE ROUTES</h3>
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
    <p>
      <span v-if="errorParticipant" style="color:red">Error: {{errorParticipant}} </span>
    </p>
    </div>

    <div id="rankings">
      <h1>Rankings</h1>

        <div class="medium-6 medium-offset-3 ctrl">
        <form class="searchForm" v-on:submit.prevent="submitSearch">
          <input type="text" placeholder="search..." style="text-align:center; margin-bottom:30px">
        </form>
      </div>

    <div class="table">
      <div class="column">
        <h3>LOYAL PASSENGERS</h3>
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
        <h3>TOP DRIVERS</h3>
        <span>Name</span>
        <span>----</span>
        <span>Rating</span>
        <!-- will try to add links for more info -->
        <!-- will sort and display them in order -->
        <!-- TODO: replace with d.rating-->
        <ul v-for="d in drivers">
          <span>{{d.firstName}} {{d.lastName}}</span>
          <span>----</span>
          <span>{{d.age}}</span>
        </ul>
      </div>

        <!-- not sure how to do this. Maybe count number of souce - destination pairs -->
        <!-- will try to link to google maps for bonus -->
      <div class="column">
        <h3>POPULAR ROUTES</h3>
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
