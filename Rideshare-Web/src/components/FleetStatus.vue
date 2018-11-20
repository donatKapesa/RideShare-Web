<template>
  <div id="fleetstatus">
    <h2>Fleet Status Overview</h2>
    <table class="table">
        <tr>
          <td>Active Drivers</td>
          <td>Active Passengers</td>
          <td>Active Routes</td>
        </tr>

        <tr v-for="participant in participants" >
          <td>{{ participant.name }}</td>
          <td>
            // list of active passengers
          </td>
          <td>
            // List of active routes
          </td>
        </tr>



      <!-- <tr>
          <td>
            <input type="text" v-model="newParticipant" placeholder="Participant Name">
          </td>
          <td>
              <button @click="createParticipant(newParticipant)">Create Passenger</button>
          </td>
      </tr> -->
    </table>

    <p>
      <span v-if="errorParticipant" style="color:red">Error: {{errorParticipant}} </span>
    </p>
  </div>
</template>

<script src="./registration.js">
  
</script>

<style>
  #rideshare {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
  }
  
  .table {
    text-align: center;
  }

</style>
