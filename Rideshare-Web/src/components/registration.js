import axios from 'axios';

//// calling backend

const frontendUrl = 'http://localhost:8087/'; // change before deploying
const backendUrl = 'https://shrouded-fjord-72003.herokuapp.com/';
//const backendUrl = 'https://eventregistration-backend-123.herokuapp.com/';

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
});


////

function ParticipantDto (name) {
  this.name = name
  this.events = []
}

function EventDto (name, date, start, end) {
  this.name = name
  this.eventDate = date
  this.startTime = start
  this.endTime = end
}

//function drivers()


export default {
  name: 'eventregistration',
  data () {
    return {
      participants: [],
      newParticipant: '',
      errorParticipant: '',
      response: []
    }
  },
  created: function () {
    // Initializing participants from backend
      // AXIOS.get(`/participants`)
      // .then(response => {
      //   // JSON responses are automatically parsed.
      //   console.log(response);
      //   this.participants = response.data
      // })
      // .catch(e => {
      //   this.errorParticipant = e;
      // });

      AXIOS.get(`/drivers`)
      .then(response => {
        // JSON responses are automatically parsed.
        console.log(response);
        this.drivers = response.data
      })
      .catch(e => {
        this.errorParticipant = e;
      });

      AXIOS.get(`/passengers`)
      .then(response => {
        // JSON responses are automatically parsed.
        console.log(response);
        this.passengers = response.data
      })
      .catch(e => {
        this.errorParticipant = e;
      });

  },
methods: {
  createParticipant: function (participantName) {
    // Create a new participant and add it to the list of participants
    var p = new ParticipantDto(participantName)
    this.participants.push(p)
    // Reset the name field for new participants
    this.newParticipant = ''
  }
}
}

