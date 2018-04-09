
// tab 2 js
function openCity(cityName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = color;

}

document.getElementById("defaultOpen").click();

// slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000);
}

// rng js test kthx



//rng
function Generate() {
    var rng_result = document.getElementById('rng-result');
    var maxEl = document.getElementById('max');
    var max = parseInt(maxEl.value);
    var minEl = document.getElementById('min');
    var min = parseInt(minEl.value);

    var n = 60;
    var waitTime = 0;

    function randomNum() {
      return min + Math.round(Math.random()*(max-min));
    }


    var a = randomNum();
    var b;
    var step;
    var i;

    function rng() {
      if (i === n) {
        return;
      }

      ++i;
      a += step;

      rng_result.innerHTML = Math.round(a);

      setTimeout(rng, waitTime);
    }

    function runRng() {
      i = 1;
      b = randomNum();
      if (max < min){
            var nmin = max;
            maxEl.value = min;
            minEl.value = nmin;

      }
      step = (b-a)/n;
      //console.warn('a', a, 'b', b);
      rng();
    }

    runRng();
}
// music

var time = 0;

var audio = document.getElementById('audio');
setTimeout(timer, 1);

function timer (){
if (audio.paused) {
     
     time = time + 0.001;
 }
}

function play() {
    
    var Play = document.getElementById('Play');
    var audio = document.getElementById('audio');
    
    if (audio.paused) {

        audio.play();
        Play.innerHTML = "Pause";
    }else{
        audio.pause(); 
        Play.innerHTML = "Play";                  
        audio.currentTime =  time;
        
    }
}