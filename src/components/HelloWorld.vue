<template>
  <div>
    
    
<button class="billy1">Bouton class Billy 1</button>

<p class="billy2">Texte class Billy 2</p>
    
  </div>
</template>

<script>
import jQuery from "jquery";


export default {
 name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  methods: {
   
	},
	mounted: function() {
        
        
        // Your JQuery code here
        $(".billy1").click(function () {

        // On retire :
        $('.billy2').css('display', 'none');

        });

	}

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
