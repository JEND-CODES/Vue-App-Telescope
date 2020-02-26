<template>

<div>

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />

<!-- Nasa Photo of the day -->
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
           
           <!-- Rendu conditionnel en fonction du type de media -> Voir demo Codepen : https://codepen.io/CharlesJ3/pen/gxebMx?editors=0010 -->
           <span v-if="nasa_photo.media_type == 'image'">
           <img v-bind:src="nasa_photo.url" style="width:100%;padding:20px;" />
           </span>

           <span v-if="nasa_photo.media_type == 'video'">
           <iframe v-bind:src="nasa_photo.url" style="width:100%;height:300px;padding:20px;border:none;"></iframe>
           </span>

          
          </div>
          <div class="col-sm-12 col-md-6 other" style="text-align:left;padding:20px;">
           
           <h4> {{ nasa_photo.title }} </h4>
           <br />
           <p> {{ nasa_photo.explanation }} </p>
            
          </div>
        </div>
      </div>

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
import jQuery from "jquery";
import axios from 'axios';

export default {
 data () {
    return {
      nasa_photo: '',
    }
  },
  methods: {
      // Getting Nasa Photo of the day !
        // Avec une autre API Key : https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
        // Exemple avec un count à la fin de l'URL : https://api.nasa.gov/planetary/apod?api_key=oVnL5w6awLgNkksXlrriTgqzzmmorYgCHgVWeEa1&count=5
        // Voir démos Codepen : https://codepen.io/OntologicalPhantoms/pen/moNzLq?editors=0010
        // Autre démo Codepen : https://codepen.io/OntologicalPhantoms/pen/VNwvEx?editors=1010

        // Démo avec choix de la date : https://codepen.io/berrak/pen/LRdrQw?editors=1010
        // Exemple Api Key utilisée avec une date précisée : https://api.nasa.gov/planetary/apod?&date=2020-02-22&api_key=595nS06jRXMFjKijZoddROwqM8SkCzPUXXKTKRGT

        // Une autre démo avec un filtrage jQuery : si l'image est une vidéo, si l'image est un Jpeg.. A tester ! 
        // https://codepen.io/frimmin/pen/yYOQMY

		getUsers: function() {
			var that = this;
			axios.get('https://api.nasa.gov/planetary/apod?&api_key=595nS06jRXMFjKijZoddROwqM8SkCzPUXXKTKRGT').then(function(response) {
				that.nasa_photo = response.data;
			}, function(error) {
				console.log(error.statusText);
			});
    }
    
	},
	mounted: function() {
        // On lance l'affichage de l'image du jour proposée par la Nasa
        this.getUsers();
  

	}

}

</script>

<style scoped>

</style>