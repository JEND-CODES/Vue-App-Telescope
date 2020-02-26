<template>

<div>


<div class="planet-links">
    <div class="row">
        
        <div class="col-sm-12 col-lg-6">
            <!-- column 1 -->
            
        </div>

        <div class="col-sm-12 col-lg-6">
            <!-- column 2 -->
            
                  <router-link to="/mercury" class="link-styled">Mercury</router-link>
                  <br />
                  <router-link to="/venus" class="link-styled">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Venus</router-link>
                  <br />
                  <router-link to="/earth" class="link-styled">Earth</router-link>
                  <br />
                  <router-link to="/mars" class="link-styled">&nbsp;&nbsp;&nbsp;Mars</router-link>
                  <br />
                  <router-link to="/jupiter" class="link-styled">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jupiter</router-link>
                  <br />
                  <router-link to="/saturn" class="link-styled">Saturn</router-link>
                  <br />
                  <router-link to="/uranus" class="link-styled">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uranus</router-link>
                  <br />
                  <router-link to="/neptune" class="link-styled">Neptune</router-link>
                  <br />
                  <router-link to="/pluto" class="link-styled">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pluto</router-link>
                  <br />
                  <router-link to="/sun" class="link-styled">&nbsp;&nbsp;&nbsp;Sun</router-link>

        </div>
    </div>
</div>


<!-- Pure CSS Solar System -->
    <div id='container'>
  <div id='neptune-orbit'>
    <div id='neptune-square'>
      <div id='neptune'></div>
    </div>
  </div>
  <div id='uranus-orbit'>
    <div id='uranus-square'>
      <div id='uranus'></div>
    </div>
  </div>
  <div id='saturn-orbit'>
    <div id='saturn-square'>
      <div id='saturn'></div>
    </div>
  </div>
  <div id='jupiter-orbit'>
    <div id='jupiter-square'>
      <div id='jupiter'></div>
    </div>
  </div>
  <div id='mars-orbit'>
    <div id='mars-square'>
      <div id='mars'></div>
    </div>
  </div>
  <div id='earth-orbit'>
    <div id='earth-square'>
      <div id='earth'>
        <div id='moon-orbit'>
          <div id='moon-square'>
            <div id='moon'></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id='venus-orbit'>
    <div id='venus-square'>
      <div id='venus'></div>
    </div>
  </div>
  <div id='mercury-orbit'>
    <div id='mercury-square'>
      <div id='mercury'></div>
    </div>
    <div id='sun'></div>
  </div>
</div>


<br />
  <br />
  <br />
  <br />
<div class="hide-br">
  
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

<br />
<br />
<p style="font-size:32px;">
Explore our Galaxy !</p>
                  
<!-- Interactive Planets -->
<div class="container1">
  <div class="object interactive">
    
    <div class="img">  
        <p class="planet mercury"></p>      
    </div>
    
    <div class="text text-columns">

      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <p class="planet-title">MERCURY</p>

            <p>Sun-scorched Mercury is only slightly larger than Earth's Moon. Like the Moon, Mercury has very little atmosphere to stop impacts and it is covered with craters. Mercury's dayside is super heated by the Sun, but at night temperatures drop hundreds of degrees below freezing. Ice may even exist in craters. Mercury's egg-shaped orbit takes it around the Sun every 88 days</p>

            <router-link to="/mercury" style="text-decoration:none;color:cornflowerblue;">
            Show data
            </router-link>

            

          </div>
          <div class="col-sm-6 other planet-infos">
            <b>Radius:</b> 2,440 km
            <p><b>Longitude of ascending node:</b> 48.331°</p>
            <p><b>Volume:</b> 6.083×1010 km3; 0.056 Earths; </p>
            <p><b>Inclination:</b> 7.005° to ecliptic; 3.38° to Sun's equator; 6.34° to invariable plane;</p>
            <p><b>Albedo:</b> 0.068 (Bond); 0.142 (geom.);</p>
            <p><b>North pole right ascension:</b> 18h 44m 2s; 281.01°;</p>
          </div>
        </div>
      </div>

      
    </div>
  </div>
  </div>

  <div class="container2">
  <div class="object2 interactive">
    
    <div class="img">  
<p class="planet venus"></p>       
    </div>
    <div class="text text-columns">

      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <p class="planet-title">VENUS</p>

            <p>Venus is a dim world of intense heat and volcanic activity. Similar in structure and size to Earth, Venus' thick, toxic atmosphere traps heat in a runaway 'greenhouse effect.' The scorched world has temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains. Venus spins slowly in the opposite direction of most planets</p>

            <router-link to="/venus" style="text-decoration:none;color:cornflowerblue;">
            Show data
            </router-link>

          </div>
          <div class="col-sm-6 other planet-infos">
            <b>Radius:</b>  6,052 km
            <p><b>Surface area:</b>460.2 million km²</p>
            <p><b>Orbital period:</b> 225 days</p>
            <p><b>Equatorial rotation velocity:</b> 6.52 km/h (1.81 m/s)</p>
            <p><b>Surface pressure:</b> 92 bar (9.2 MPa)</p>
            <p><b>Synodic period:</b> 583.92 days</p> 
          </div>
        </div>
      </div>

      </div>
    </div>
  </div>


<div class="container3">
  <div class="object3 interactive">
    
    <div class="img">  
<p class="planet earth"></p>       
    </div>
    <div class="text text-columns">

      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <p class="planet-title">EARTH</p>

            <p>Earth is an ocean planet. Our home world's abundance of water - and life - makes it unique in our solar system. Other planets, plus a few moons, have ice, atmospheres, seasons and even weather, but only on Earth does the whole complicated mix come together in a way that encourages life - and lots of it</p>

            <router-link to="/earth" style="text-decoration:none;color:cornflowerblue;">
            Show data
            </router-link>

          </div>
          <div class="col-sm-6 other planet-infos">
            <b>Radius:</b> 6,371 km
            <p><b>Axial tilt:</b> 23.4392811°</p>
            <p><b>Volume:</b> 1.08321×1012 km3 (2.59876×1011 cu mi)</p>
            <p><b>Polar radius:</b> 6356.8 km (3949.9 mi)</p>
            <p><b>Equatorial rotation velocity:</b> 0.4651 km/s; (1674.4 km/h; 1040.4 mph)</p>
            <p><b>Mean anomaly:</b> 358.617°</p>
          </div>
        </div>
      </div>
   
   </div>
  </div>
</div>


<div class="container4">
  <div class="object4 interactive">
   
    <div class="img">  
<p class="planet mars"></p>
    </div>
    <div class="text text-columns">

      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <p class="planet-title">MARS</p>

            <p>Though details of Mars' surface are difficult to see from Earth, telescope observations show seasonally changing features and white patches at the poles. For decades, people speculated that bright and dark areas on Mars were patches of vegetation, that Mars could be a likely place for life-forms, and that water might exist in the polar caps. When the Mariner 4 spacecraft flew by Mars in 1965, many were shocked to see photographs of a bleak, cratered surface. Mars seemed to be a dead planet. Later missions, however, have shown that Mars is a complex member of the solar system and holds many mysteries yet to be solved</p>

            <router-link to="/mars" style="text-decoration:none;color:cornflowerblue;">
            Show data
            </router-link>
          
          </div>
          <div class="col-sm-6 other planet-infos">
            <b>Radius:</b> 3,390 km
            <p><b>Gravity:</b> 3.711 m/s²</p>
            <p><b>Length of day:</b> 1d 0h 40m</p>
            <p><b>Surface area:</b> 144.8 million km²</p>
            <p><b>Surface pressure:</b>144.8 million km²</p>
            <p><b>Moons:</b> Deimos, Phobos</p>
          </div>
        </div>
      </div>
    
   </div>
  </div>
</div>

<div class="container5">
  <div class="object5 interactive">
    
    <div class="img">  
<p class="planet jupiter"></p> 
    </div>
    <div class="text text-columns">

      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <p class="planet-title">JUPITER</p>

            <p>The most massive planet in our solar system, with four large moons and many smaller moons. Jupiter forms a kind of miniature solar system, and resembles a star in composition. In fact, if it had been about 80 times more massive, it would have become a star rather than a planet</p>

            <router-link to="/jupiter" style="text-decoration:none;color:cornflowerblue;">
            Show data
            </router-link>

          </div>
          <div class="col-sm-6 other planet-infos">
            <b>Radius:</b> 69,911 km
            <p><b>Mass:</b> 1.898 × 10^27 kg (317.8 M⊕)</p>
            <p><b>Axial tilt:</b> 3.13° (to orbit)</p>
            <p><b>Scale height:</b> 27 km</p>
            <p><b>Inclination:</b>1.303° to ecliptic; 6.09° to Sun's equator; 0.32° to invariable plane;</p>
            <p><b>Moons:</b> Europa, Ganymede, Io, Callisto, Iocaste, Adrastea, Amalthea, more </p>
          </div>
        </div>
      </div>
   
   </div>
  </div>
</div>

<div class="container6">
  <div class="object6 interactive">
    
    <div class="img">  
<p class="planet saturn"></p>       
    </div>
    <div class="text text-columns">

      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <p class="planet-title">SATURN</p>

            <p>Saturn was the most distant of the five planets known to the ancients. Like Jupiter, Saturn is made mostly of hydrogen and helium. Its volume is 755 times greater than that of Earth. Winds in the upper atmosphere reach 500 meters (1,600 feet) per second in the equatorial region. These super-fast winds, combined with heat rising from within the planet's interior, cause the yellow and gold bands visible in the atmosphere</p>

            <router-link to="/saturn" style="text-decoration:none;color:cornflowerblue;">
            Show data
            </router-link>
            
          </div>
          <div class="col-sm-6 other planet-infos">
            <b>Radius:</b> 58,232 km
            <p><b>Equatorial rotation velocity:</b> 9.87 km/s (6.13 mi/s; 35,500 km/h)</p>
            <p><b>Polar radius:</b> 54,364 ± 10 km (33,780 ± 6 mi); 8.5521 Earths;</p>
            <p><b>Mean anomaly:</b> 317.020°</p>
            <p><b>Synodic period:</b>378.09 days</p>
            <p><b>Moons:</b> Titan, Enceladus, Mimas, Iapetus, Dione, Tethys, Rhea, Kari, more </p>
          </div>
        </div>
      </div>
    
   </div>
  </div>
</div>

<div class="container7">
  <div class="object7 interactive">
    
    <div class="img">  
<p class="planet uranus"></p>       
    </div>
    <div class="text text-columns">

      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <p class="planet-title">URANUS</p>

            <p>The first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel. The seventh planet from the Sun is so distant that it takes 84 years to complete one orbit</p>

            <router-link to="/uranus" style="text-decoration:none;color:cornflowerblue;">
            Show data
            </router-link>

          </div>
          <div class="col-sm-6 other planet-infos">
            <b>Radius:</b> 25,362 km
            <p><b>Adjectives:</b> Uranian</p>
            <p><b>Volume:</b> 6.833×1013 km3; 63.086 Earths</p>
            <p><b>Argument of perihelion:</b> 96.998857°</p>
            <p><b>Scale height:</b>27.7 km</p>
            <p><b>Moons:</b> Titania, Miranda, Umbriel, Ariel, Trinculo, Oberon, Margaret, more</p>
          </div>
        </div>
      </div>
    
   </div>
  </div>
</div>

<div class="container8">
  <div class="object8 interactive">
    
    <div class="img">  
<p class="planet neptune"></p>      
    </div>
    <div class="text text-columns">

      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <p class="planet-title">NEPTUNE</p>

             <p>Nearly 4.5 billion kilometers (2.8 billion miles) from the Sun, Neptune orbits the Sun once every 165 years. It is invisible to the naked eye because of its extreme distance from Earth. Interestingly, the unusual elliptical orbit of the dwarf planet Pluto brings Pluto inside Neptune's orbit for a 20-year period out of every 248 Earth years</p>

             <router-link to="/neptune" style="text-decoration:none;color:cornflowerblue;">
            Show data
            </router-link>

          </div>
          <div class="col-sm-6 other planet-infos">
            <b>Radius:</b>  24,622 km
            <p><b>Length of the day:</b>0d 16h 6m</p>
            <p><b>Orbital period:</b> 225 days</p>
            <p><b>Equatorial rotation velocity:</b> 2.68 km/s; 9,660 km/h</p>
            <p><b>Mean anomaly:</b> 256.228°</p>
            <p><b>Moons:</b> Triton, S/2004 N 1, Laomedeia, Thalassa, Proteus, Nereid, Halimede, Despina, Larissa, Galatea, Naiad, Neso, Sao, Psamathe</p>
            
          </div>
        </div>
      </div>

      </div>
    </div>
   </div>

</div>

</template>

<script>

export default {
 data () {
    return {
      
      
    }
  }

}

</script>

<style scoped>

.planet-links {
  position:absolute;
  top:180px;
  border:0px solid red;
  width:100%;
  
}

@media all and (max-width: 1100px) {
  .planet-links {
    display:none;
  
}
}

.link-styled {
  text-decoration:none;
  font-size:30px;
  color:cornflowerblue;
  transition:0.5s;
}

.link-styled:hover {
  color:white;
  transition:0.5s;
}

#container {
  margin-top: 0px;
  position: absolute;
  margin-left: 45%;
  width: 700px;
  height: 100%;
  z-index:-1;
}

@media all and (max-width: 1100px) {
  #container {
    display:none;
  }
}

@keyframes spin {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
/* Sun */
#sun {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-top: -90px;
  margin-left: auto;
  margin-right: auto;
  background:radial-gradient(ellipse at center, #ffd000 1%,#f9b700 39%,#f9b700 39%,#e06317 100%);
  box-shadow: 0 0 30px orange;
  z-index: 100;
}

/* Mercury */
#mercury-orbit {
  width: 125px;
  height: 125px;
  border-radius: 50%;
  border: 1px solid #1e2b3d;
  position: absolute;
  z-index: -1;
  margin-left: 0;
  margin-top: 54%;
}

#mercury-square {
  width: 100px;
  height: 100px;
  animation-name: spin;
  animation-duration: 7200ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12.5px;
}

#mercury {
  width: 10%;
  height: 10%;
  border-radius: 50%;
  top: 0;
  margin-left: 0;
  background: linear-gradient(to bottom, gray, white);
  box-shadow: 0 0 5px gray;
}

/* Venus */
#venus-orbit {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid #1e2b3d;
  position: absolute;
  z-index: -1;
  margin-left: -36px;
  margin-top: 49.5%;
}

#venus-square {
  width: 160px;
  height: 160px;
  animation-name: spin;
  animation-duration: 18600ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin-left: auto;
  margin-right: auto;
  margin-top: 17.5px;
}

#venus {
  width: 10%;
  height: 10%;
  border-radius: 50%;
  top: 0;
  margin-left: 0;
  background: linear-gradient(to bottom, brown, orange);
  box-shadow: 0 0 5px brown;
}

/* Earth */
#earth-orbit {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 1px solid #1e2b3d;
  position: absolute;
  z-index: -1;
  margin-left: -76px;
  margin-top: 44.5%;
}

#earth-square {
  width: 210px;
  height: 210px;
  animation-name: spin;
  animation-duration: 30000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin-left: auto;
  margin-right: auto;
  margin-top: 36px;
}

#earth {
  width: 5%;
  height: 5%;
  border-radius: 50%;
  top: 0;
  margin-left: 0;
  background: linear-gradient(to bottom, deepskyblue, lightblue);
  box-shadow: 0 0 5px skyblue;
}

/* Moon */
#moon-orbit {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #1e2b3d;
  position: absolute;
  z-index: -1;
  margin-left: -10px;
  margin-top: -10px;
}

#moon-square {
  width: 27px;
  height: 27px;
  animation-name: spin;
  animation-duration: 2219ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1px;
}

#moon {
  width: 15%;
  height: 15%;
  border-radius: 50%;
  top: 0;
  margin-left: 0;
  background: linear-gradient(to bottom, darkgray, white);
  box-shadow: 0 0 5px white;
}

/* Mars */
#mars-orbit {
  width: 360px;
  height: 360px;
  border-radius: 50%;
  border: 1px solid #1e2b3d;
  position: absolute;
  z-index: -1;
  margin-left: -113px;
  margin-top: 39.5%;
}

#mars-square {
  width: 265px;
  height: 265px;
  animation-name: spin;
  animation-duration: 56400ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin-left: auto;
  margin-right: auto;
  margin-top: 48px;
}

#mars {
  width: 3%;
  height: 3%;
  border-radius: 50%;
  top: 0;
  margin-left: 0;
  background: linear-gradient(to bottom, firebrick, orangered);
  box-shadow: 0 0 5px brown;
}

/* Jupiter */
#jupiter-orbit {
  width: 560px;
  height: 560px;
  border-radius: 50%;
  border: 1px solid #1e2b3d;
  position: absolute;
  z-index: -1;
  margin-left: -210px;
  margin-top: 27%;
}

#jupiter-square {
  width: 455px;
  height: 455px;
  animation-name: spin;
  animation-duration: 355800ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin-left: auto;
  margin-right: auto;
  margin-top: 48px;
}

#jupiter {
  width: 12%;
  height: 12%;
  border-radius: 50%;
  top: 0;
  margin-left: 0;
  background: linear-gradient(to bottom, brown, saddlebrown);
  box-shadow: 0 0 5px brown;
}

/* Saturn */
#saturn-orbit {
  width: 660px;
  height: 660px;
  border-radius: 50%;
  border: 1px solid #1e2b3d;
  position: absolute;
  z-index: -1;
  margin-left: -260px;
  margin-top: 21%;
}

#saturn-square {
  width: 495px;
  height: 495px;
  animation-name: spin;
  animation-duration: 883800ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
}

#saturn {
  width: 5%;
  height: 5%;
  border-radius: 50%;
  top: 0;
  margin-left: 0;
  background: linear-gradient(to bottom, lightgoldenrodyellow, goldenrod);
  box-shadow: 0 0 5px brown;
}

/* Uranus */
#uranus-orbit {
  width: 760px;
  height: 760px;
  border-radius: 50%;
  border: 1px solid #1e2b3d;
  position: absolute;
  z-index: -1;
  margin-left: -310px;
  margin-top: 15%;
}

#uranus-square {
  width: 555px;
  height: 555px;
  animation-name: spin;
  animation-duration: 2520300ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
}

#uranus {
  width: 3%;
  height: 3%;
  border-radius: 50%;
  top: 0;
  margin-left: 0;
  background: linear-gradient(to bottom, deepskyblue, lightblue);
  box-shadow: 0 0 5px skyblue;
}

/* Neptune */
#neptune-orbit {
  width: 860px;
  height: 860px;
  border-radius: 50%;
  border: 1px solid #1e2b3d;
  position: absolute;
  z-index: -1;
  margin-left: -360px;
  margin-top: 10%;
}

#neptune-square {
  width: 630px;
  height: 630px;
  animation-name: spin;
  animation-duration: 4944000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin-left: auto;
  margin-right: auto;
  margin-top: 110px;
}

#neptune {
  width: 3%;
  height: 3%;
  border-radius: 50%;
  top: 0;
  margin-left: 0;
  background: linear-gradient(to bottom, deepskyblue, darkcyan);
  box-shadow: 0 0 5px lightblue;
}

/* Interactive Planets -> Voir démo : https://codepen.io/gertseva/pen/KmBdby?editors=1100 */


.interactive{
 
  border:0px solid red;
  width:100%;
  
  text-align:center;
  
  font-size:18px;
  color:white;
}

.planet-title {
  font-size:40px;
  color:white;
}

.planet-infos {
  padding:40px;
  font-size:14px;
}

.text-columns {
  margin-top:-50px;
}

.planet {
  display: inline-block;
  width: 260px;
  height: 260px;
  background-size: 600px 300px;
  border-radius: 50%;
  animation: rotatePlanet 15s linear infinite;
  transition:all 10s;
}
.planet:hover {
  cursor:pointer;
}

.mercury {
  background-image: url('http://www.cssnewbie.com/wp-content/uploads/2013/01/planet-mercury.jpg');
  transform: scale(.43);
}

.venus {
  background-image: url('http://www.cssnewbie.com/wp-content/uploads/2013/01/planet-venus.jpg');
  transform: scale(.43);
}

.earth {
  background-image:  url('http://www.cssnewbie.com/wp-content/uploads/2013/01/planet-earth.jpg');
  
  transform: scale(.43);
}

.mars {
  background-image: url('http://www.cssnewbie.com/wp-content/uploads/2013/01/planet-mars.jpg');
  transform: scale(.43);
}

.jupiter {
  background-image: url('http://i.dailymail.co.uk/i/pix/2011/09/10/article-2035881-0DCE7F7000000578-915_964x601.jpg');
  transform: scale(.43);
}

.saturn {
  background-image: url('http://orig15.deviantart.net/0aba/f/2016/326/0/2/saturn_texture_map_by_jcpag2010-dapbi6l.jpg');
  transform: scale(.43);
}

.uranus {
  background-image: url('http://img07.deviantart.net/038f/i/2016/036/2/7/uranus_texture_from_keck_data_by_fargetanik-d9qkhh3.png');
  transform: scale(.43);
}

.neptune {
  background-image: url('http://pre01.deviantart.net/cecc/th/pre/f/2010/235/d/1/blue_gas_giant_texture_by_avmorgan.jpg');
  transform: scale(.43);
}

@keyframes rotatePlanet {
  from { background-position: 0% 0%; }
  to { background-position: 200% 0%; }
}
@keyframes pause {
  from { background-position: 0% 0%; }
  to { background-position: 0% 0%; }
}



@media all and (max-width: 1100px) {
  .hide-br {
    display:none;
  }
}

</style>