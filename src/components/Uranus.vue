<template>

<div>

	<br />
    <br />
    <br />
    <br />
	<br />
    <br />
    <br />
    <br />

<h5>Results for 'Uranus'</h5>
    

<ul class="flex-container">

      <li class="flex-item photobox" v-for="item in list">
        
        <a v-bind:href="item.links[0].href" target="_blank">
          <img v-bind:src="item.links[0].href" />
        </a>
        
        <p class="photo-legend">{{ item.data[0].title }}</p>

      </li>

</ul>

</div>

</template>

<script>
import axios from 'axios';

export default {
 data () {
    return {
      
      list: null,
    }
  },
  methods: {
		getUsers: function() {
			var that = this;
			axios.get('https://images-api.nasa.gov/search?q=uranus&media_type=image').then(function(response) {
				that.list = response.data.collection.items;
			}, function(error) {
				console.log(error.statusText);
			});
		}
	},
	mounted: function() {
		this.getUsers();
	}

}
</script>

<style scoped>
.flex-container {
    display: flex;
    flex-flow: row wrap;
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

</style>