// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

// Nasa Api demos codepen : Images banks -> https://codepen.io/iamlexieonearth/pen/vwPRPY?editors=0010
// https://codepen.io/knox97/pen/LRYWoV?editors=1010
// Image of the day : https://codepen.io/ZapataJose/pen/GQRdda?editors=1010

// Api Nasa imagery + Vue App Tutorial : suivi du tuto youtube -> https://www.youtube.com/watch?v=GiIQce7Rx4Y
// Installation de axios avec : "npm install axios --save"

// Import all components we want to use
import Home from './components/Home.vue';

import DayImage from './components/DayImage.vue';

import AboutUs from './components/AboutUs.vue';

import Homepage from './components/Homepage.vue';

import Search from './components/Search.vue';

import SimpleSearch from './components/SimpleSearch.vue';

// Planets Search Routes

import Mercury from './components/Mercury.vue';
import Venus from './components/Venus.vue';
import Earth from './components/Earth.vue';
import Mars from './components/Mars.vue';
import Jupiter from './components/Jupiter.vue';
import Saturn from './components/Saturn.vue';
import Uranus from './components/Uranus.vue';
import Neptune from './components/Neptune.vue';
import Pluto from './components/Pluto.vue';
import Sun from './components/Sun.vue';

// import vue router
import VueRouter from 'vue-router';


const Foo = { 
  template: `
<div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<h2>Foo</h2>
<p>
This is the template for foo.
</p>

<div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>

   

</div>


` 
};

const Bar = { template: `

<div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<h2>Bar</h2>
<p>
This is the template for Bar.
</p>
<div class="container">
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="https://1.bp.blogspot.com/-ZcajAb5dvow/XdmtfktiffI/AAAAAAAAA_g/XExallOiT9UYNpPtWZK6GfpdgTcfOcvegCLcBGAsYHQ/s1600/photo-paysage-urbain-pont-nuit.jpg" class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src="https://1.bp.blogspot.com/-ZcajAb5dvow/XdmtfktiffI/AAAAAAAAA_g/XExallOiT9UYNpPtWZK6GfpdgTcfOcvegCLcBGAsYHQ/s1600/photo-paysage-urbain-pont-nuit.jpg" class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src="https://1.bp.blogspot.com/-ZcajAb5dvow/XdmtfktiffI/AAAAAAAAA_g/XExallOiT9UYNpPtWZK6GfpdgTcfOcvegCLcBGAsYHQ/s1600/photo-paysage-urbain-pont-nuit.jpg" class="d-block w-100" alt="...">
  </div>
</div>
<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>
</div>
</div>

` 
};

// Use Vue Router :
Vue.use(VueRouter);

const router = new VueRouter ({
  routes : [

    {path:"/", component: Homepage},

    {path:"/search", component: Search},

    {path:"/simple-search", component: SimpleSearch},
    
    {path:"/home", component: Home},

    {path:"/about-us", component: AboutUs},
    
    {path:"/day-image", component: DayImage},

    {path:"/mercury", component: Mercury},
    {path:"/venus", component: Venus},
    {path:"/earth", component: Earth},
    {path:"/mars", component: Mars},
    {path:"/jupiter", component: Jupiter},
    {path:"/saturn", component: Saturn},
    {path:"/uranus", component: Uranus},
    {path:"/neptune", component: Neptune},
    {path:"/pluto", component: Pluto},
    {path:"/sun", component: Sun},
    

    // Ici insertion d'éléments HTMl : comme démo Codepen -> https://codepen.io/cfjedimaster/pen/yPbqYw?editors=1010
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});




