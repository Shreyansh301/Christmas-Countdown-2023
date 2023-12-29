document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
    particlesJS("snow", {
    "particles": {
    "number": {
    "value": 200,
    "density": {
    "enable": true,
    "value_area": 800
    }
    },
    "color": {
    "value": "#ffffff"
    },
    "opacity": {
    "value": 0.7,
    "random": false,
    "anim": {
    "enable": false
    }
    },
    "size": {
    "value": 5,
    "random": true,
    "anim": {
    "enable": false
    }
    },
    "line_linked": {
    "enable": false
    },
    "move": {
    "enable": true,
    "speed": 5,
    "direction": "bottom",
    "random": true,
    "straight": false,
    "out_mode": "out",
    "bounce": false,
    "attract": {
    "enable": true,
    "rotateX": 300,
    "rotateY": 1200
    }
    }
    },
    "interactivity": {
    "events": {
    "onhover": {
    "enable": false
    },
    "onclick": {
    "enable": false
    },
    "resize": false
    }
    },
    "retina_detect": true
    });
    }
    document.head.append(script);
   });

// Set the date we're counting down to
var countDownDate = new Date("Dec 25, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);