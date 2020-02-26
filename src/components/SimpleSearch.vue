<template>
  <div>

    <br />
    <br />
    <br />
    <br />
   
      <form v-on:submit.prevent="getResult(query)">
        <input type="text" placeholder="Keyword" v-model="query" required/>
       
        <button type="submit" class="special-submit">Search</button>
      </form>

    <br />
    <br />
    <br />
    
<ul class="flex-container" v-if="results">

      <li class="flex-item photobox" v-for="result in results">
        
        <a v-bind:href="result.links[0].href" target="_blank">
          <img v-bind:src="result.links[0].href" />
        </a>
        
        <p class="photo-legend">{{ result.data[0].title }}</p>

      </li>

</ul>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
   
  </div>
</template>

<script>
// Voir Vue Expandable Image
// https://codepen.io/tahazsh/pen/aMbooL?editors=1010

// Vue.js image size toggle
// https://codepen.io/manifoldkaizen/pen/NgRzxL?editors=0110

import axios from 'axios';

export default {
  
  data: function() {
    return {
      
      query: '',
     
      results: '',

      // Pour définir un effet fullWidth au click sur une image
      // 'fullWidthImage': false
    }
  },
  methods: {
    getResult(query) {
      // Source des données voir : https://images.nasa.gov/

      // Example https://images-api.nasa.gov/search?q=Sun&media_type=image
      axios.get('https://images-api.nasa.gov/search?q=' + query + '&media_type=image').then( response => {

        console.log(response.data.collection.items);

        this.results = response.data.collection.items;
        
      }).catch(function(error) {

            console.error(error);

            alert("No results !");

      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
.results-box img {

  height:300px;
  margin: 10px;

}
*/

/*
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
*/

.flex-container {
  /* We first create a flex layout context */
  display: flex;
  
  /* Then we define the flow direction 
     and if we allow the items to wrap 
   * Remember this is the same as:
   * flex-direction: row;
   * flex-wrap: wrap;
   */
  flex-flow: row wrap;
  
  /* Then we define how is distributed the remaining space */
  justify-content: space-around;
  
  padding: 0;
  margin: 0;
  list-style: none;
  background:white;
}

.flex-item {
  background: white;
  padding: 5px;
  width: 400px;
  height: auto;
  margin-top: 30px;
  
  color: black;
  
  
  text-align: center;
}

.photo-legend {
  font-size: 16px;
  margin:15px;
}

.photobox { 
  overflow: hidden;
  cursor: pointer;
  }

.photobox img {
  
  width:100%; 
	transition: all .3s ;
  border-radius: 2px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
  }

/*
.photobox:hover img {
  width:120%; 
  margin: 0 0 0 -10%; 
	transition: all .3s ;  
  }
*/

  /* Toggle image full width */

/*
  .full {
  width: 100%;
  height: auto;
  }

  img {
    width: 150px;
    border-radius: 2px;
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
    transition: width 1s;
  }

  img:hover {
    cursor: pointer;
  }
*/

input[type=text] {
  width: 150px;
  padding: 10px 13px;
  margin: 8px 8px;
  border: 0px solid #ccc;
  border-radius: 20px;
  box-sizing: border-box;
	
  transition: 0.5s;
  outline: none;
  opacity:0.9;

	
}

input[type=text]:focus {
  border: 0px solid white;
  opacity:1;
}

.special-submit {
  width:150px;
  padding: 10px 13px;
  margin: 8px 8px;
  border: 0px solid #ccc;
  border-radius: 20px;
  box-sizing: border-box;
	background-color:cornflowerblue;
  transition: 0.3s;
  outline: none;
  color:white;
}

.special-submit:hover {
  transition: 0.3s;
  opacity:0.75;
}
  
</style>

