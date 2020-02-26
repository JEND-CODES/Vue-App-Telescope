<template>
  <div id="app">

<!-- Bootstrap Modal -->    
<div class="wrap">
  
  <span class="special-button" data-toggle="modal" data-target=".bs-example-modal-new">
    <i class="fas fa-space-shuttle"></i>
  </span>

</div>
 
<div class="modal fade bs-example-modal-new" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  
  <div class="modal-dialog">  
    <!-- Modal Content: begins -->
    <div class="modal-content">
      
      <!-- Modal Header -->
      <div class="modal-header">

          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          
      </div>
    
      <!-- Modal Body -->  
      <div class="modal-body">
        <div class="body-message">
          
          <!-- Routes -->

          <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="float:none;">
            <router-link to="/" style="text-decoration:none;">
            <i class="fas fa-user-astronaut"></i>
            &nbsp;&nbsp;Home
            </router-link>
          </button>

          <br />
          <br />

          
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="float:none;">
            <router-link to="/simple-search" style="text-decoration:none;">
            <i class="fas fa-search"></i>
            &nbsp;&nbsp;Search
            </router-link>
          </button>

          <br />
          <br />

          <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="float:none;">
            <router-link to="/search" style="text-decoration:none;">
            <i class="fas fa-camera-retro"></i>
            &nbsp;&nbsp;Advanced Search
            </router-link>
          </button>

          <br />
          <br />
          
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="float:none;">
            <router-link to="/day-image" style="text-decoration:none;">
            <i class="fas fa-meteor"></i>
            &nbsp;&nbsp;Image of the day
            </router-link>
          </button>

          <br />
          <br />

            <a href="http://nasa.planetcode.fr/IssPosition.html" style="text-decoration:none; font-weight:bold; font-size:24px;color:#007bff;opacity:0.55;"><i class="fas fa-satellite"></i>
            &nbsp;&nbsp;ISS Position</a>
            
          <br />
          <br />

        </div>
      </div>
      
    </div>
    <!-- Modal Content: ends -->   
  </div>
</div>

<!-- Navbar Animation -->
<div class="navbar-header"></div>

<!-- Pure CSS Navbar Demo Codepen : https://codepen.io/mutedblues/pen/MmPNPG -->
<header class="header">

  <a href="" class="logo">TELESCOPE</a>
  <p class="logo-subtitle">NASA IMAGERY</p>
  
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li><router-link to="/"><i class="fas fa-user-astronaut"></i>&nbsp;&nbsp;Home</router-link></li>

    <li><router-link to="/day-image"><i class="fas fa-camera-retro"></i>&nbsp;&nbsp;Image of the day</router-link></li>

    <li><router-link to="/search"><i class="fas fa-meteor"></i>&nbsp;&nbsp;Advanced Search</router-link></li>

    <li><a href="http://nasa.planetcode.fr/IssPosition.html" ><i class="fas fa-satellite"></i>&nbsp;&nbsp;ISS Position</a></li>

    <li><router-link to="/simple-search"><i class="fas fa-search"></i></router-link></li>

  </ul>
</header>


<!-- Search Form Api Nasa -->
    <!-- <search></search> -->

<!-- Component HelloWorld -->
    <!-- <HelloWorld></HelloWorld> -->

<!-- Back to top button -->
<a href="#" class="btn btn-dark btn-md back-to-top" role="button"><i class="fas fa-chevron-up"></i></a>

<!-- Vue.js Main Transitions -->
    <main class="App__main">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view/>
      </transition>
    </main>

   
  </div>
</template>

<script>
// Une autre méthode pour importer des composants directement dans App.vue :
// import HelloWorld from './components/HelloWorld';

// Le composant importé doit ensuite être mentionné dans la partie "components { }"
// Puis les balises <HelloWorld></HelloWorld> doivent être ajoutées dans la partie code HTML d'App.vue

export default {
  name: 'App',

  // Mentions des composants à importer éventuellement
  components: {
    // HelloWorld,
    // Search,
    
  },
  
  	mounted: function() {

        $(window).scroll(function() {

          var logo_scroll = $(window).scrollTop(); 

          if (logo_scroll >= 100) {
            
            $('.logo').css('color', '#333');
            $('.logo-subtitle').css('color', '#444');
            $('.header li a').css('color', 'cornflowerblue');
            $('.fa-space-shuttle').css('color', 'cornflowerblue');
            
            $('.back-to-top').css('opacity', '0.8');
                       
          } else if (logo_scroll < 100) {
            
            $('.logo').css('color', 'white');
            $('.logo-subtitle').css('color', 'white');
            $('.header li a').css('color', 'white');
            $('.fa-space-shuttle').css('color', 'white');

            $('.back-to-top').css('opacity', '0');
          }
        });

    

	}
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap');

#app {
  font-family: 'Quicksand' ;
  text-align:center;
  color: #fff;
  
}

/* Voir : Vue Router Page Transitions with Fade, Slide and Zoom Effects -> https://markus.oberlehner.net/blog/vue-router-page-transitions/#basic-fade-transition */

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.8s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}


.back-to-top {
    position: fixed;
    bottom: 25px;
    right: 25px;
    opacity:0;
    transition:0.5s;
    z-index:1000;
   
}

/* Fontawesome */
.fa-space-shuttle {
  transform: rotate(-90deg);
  font-size: 28px;
  color:white;
  margin-right:17px;
}

/* Special Button -> Modal Menu Rocket */
.special-button {
  cursor:pointer;
  position:absolute;
  top:22px;
  right:10px;
  border:0px solid red;
  
}



/* Bootsrap Modal */
.wrap { 
  position:fixed;
  top:0px;
  right:0px;
  z-index:1000;
  padding: 15px;
  
  }

.no-borders { 
  border: 0px; 
  }
.body-message { 
  font-size: 18px; 
  }
.centered { 
  text-align: center; 
  }


@media all and (min-width: 1201px) {
  .wrap { 
    display:none; 
  }
}

/* Voir démo Codepen Solar System Pure CSS : https://codepen.io/samirc/pen/WQORrx */

body {
  background-image: url("http://i.ytimg.com/vi/qbzFSfWwp-w/maxresdefault.jpg");
  overflow-x:hidden;
  height:100%;
  margin:0;
  padding:0;
  background-attachment: fixed;
  background-size: cover;
}



/* Navbar Animation -> Scroll controls opacity with jQuery */

.navbar-header {
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
  position: fixed;
  width: 100%;
  height:68px;
  z-index: 2;
  top:0;
  transition:0.5s;
  opacity:0;
}

/* Pure CSS Navbar -> Demo Codepen : https://codepen.io/mutedblues/pen/MmPNPG */

.header {
  background-color: transparent;
  
  position: fixed;
  width: 100%;
  z-index: 3;
  top:0;
  transition:0.5s;
  
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: transparent;
  
}

.header li a {
  display: block;
  padding: 20px 20px;
  color:white;
  font-size:22px;
  font-family: 'Quicksand' ;
  font-weight: 500;
  text-decoration: none;
  transition:0.4s;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: transparent;
  
  opacity:0.5 !important;
  transition:0.4s;
}

.header .logo {
  display: block;
  float: left;
  margin-left:10px;
  margin-top:-5px;

  font-size: 28px;
  padding: 10px 20px;
  text-decoration: none;
  font-family: 'Quicksand' ; 
  color:white;
  font-weight: 700;
  letter-spacing: .3em;
  transition:0.5s;
}

.logo:hover {
  opacity:0.5;
  transition:0.5s;
}

.logo-subtitle {
  position:absolute;
  font-size: 14px;
  margin-top:40px;
  margin-left:36px;
  text-decoration: none;
  font-family: 'Quicksand' ; 
  color:white;
  font-weight: 500;
  letter-spacing: .51em;
  transition:0.5s;
  
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #fff;
  display: block;
  height: 4px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #fff;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* 48em = 768px */

@media (min-width: 48em) {
  .header li {
    float: left;
  }
  .header li a {
    padding: 20px 20px;
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
}

@media all and (max-width: 1200px) {
    .menu {
      display: none !important;
  }
    .menu-btn {
        display: none !important;
    }
    .menu-icon {
        display: none !important;
    }
    .navicon {
        display: none !important;
    }
}





</style>
