<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1> hello! </h1>
    <router-view></router-view>
    <fish-button>Testing</fish-button>
  </div>
</template>

<script>
// Import modules.
import Firebase from 'firebase';
import config from './config';


// Start Firebase DB and App.

let Application = Firebase.initializeApp(config);
let db = Application.database();

let UsersRef = db.ref('users');

export default {
  name: 'App',
  firebase:{
    users: UsersRef
    },
    data(){
      return {
        newUser:{
          name: '',
          email: '',
          password: ''
        }
        }
      }

}
</script>

