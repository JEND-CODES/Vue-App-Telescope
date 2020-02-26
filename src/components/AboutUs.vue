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

<h1>About Us Page Nasa V2 !</h1>

            <ul style="list-style-type: none;">
				<li v-for="item in list">
					 
					<img v-bind:src="item.links[0].href" />
					
				</li>
			</ul>

</div>

</template>

<script>
import axios from 'axios';

export default {
 data () {
    return {
      msg: 'Premier test de Routing fonctionnel !',
      list: null,
    }
  },
  methods: {
		getUsers: function() {
			var that = this;
			axios.get('https://images-api.nasa.gov/search?q=mars&media_type=image&year_start=1960&year_end=1963').then(function(response) {
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

</style>