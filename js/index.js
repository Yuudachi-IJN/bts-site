// tab 1 js
// function openPage(evt, cityName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }

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
    var rng = document.getElementById('rng-result');
    var max = document.getElementById('max');
    var maxvalue = max.value;
    var min = document.getElementById('min');
    var minvalue = min.value;
    //getElementById('rng-result').innerHTML =Date()
    rng.innerHTML =Math.random(minvalue,maxvalue);
    //rng.innerHTML = minvalue;
}


//(function(){var e={gen204:"aft",clearcut:1},f={gen204:"iml",clearcut:8},h={gen204:"ol",clearcut:14},k={gen204:"prt",clearcut:16};var l,m,n,p,q=0,r=0;function t(a){l.removeEventListener("click",t);a.stopPropagation&&a.stopPropagation()}function u(a){++n;a=a||window.event;google.iTick(a.target||a.srcElement)}
//var v=function(){var a=google.timers.webaft;var c=a.t;var b=c.start;a="/gen_204?s=webaft&atyp=csi&ei="+google.kEI+"&rt=wsrt."+a.wsrt;for(var g in c){var d=c[g];"start"!=g&&d&&b&&(a+=","+d.key.gen204+"."+(d.ts-b))}c=a;google.c.c.e&&(l?(l.setAttribute("ping",c),l.click()):navigator.sendBeacon?navigator.sendBeacon(c,""):google.log("","",c))};function w(a){if(!a||"none"==a.style.display)return!1;if(document.defaultView&&document.defaultView.getComputedStyle){var c=document.defaultView.getComputedStyle(a);if("hidden"==c.visibility||"0px"==c.height||"0px"==c.width)return!1}if(!a.getBoundingClientRect)return!0;a=a.getBoundingClientRect();c=a.left+window.pageXOffset;var b=a.top+window.pageYOffset;return 0>b+a.height||0>c+a.width||0>=a.height||0>=a.width?!1:b<=(window.innerHeight||document.documentElement.clientHeight)&&c<=(window.innerWidth||
//document.documentElement.clientWidth)}var x=function(a){google.rll(a,!1,function(){++r;0<r&&r==q&&(google.tick("webaft",e),v())})};(function(){google.c.c.e&&(l=document.getElementById("csi-ping"))&&l.addEventListener("click",t);if(google.timers&&google.timers.load.t){google.c.c.a&&(google.startTick("aft"),google.afte=!1);var a=document.getElementsByTagName("img");m=a.length;for(var c=n=0,b;c<m;++c)if(b=a[c],google.c.c.i&&"none"==b.style.display)++n;else{var g="string"!=typeof b.src||!b.src,d=g||b.complete;b.getAttribute("data-noaft")?d=!0:google.c.c.d?b.getAttribute("data-deferred")?(d=!1,b.removeAttribute("data-deferred")):(g||"data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="===b.src)&&b.setAttribute("lazy-loaded",""):google.c.c.m&&g&&b.getAttribute("data-bsrc")&&(d=!1);d?++n:(google.rll(b,!0,u),google.c.c.e&&w(b)&&(++q,x(b)))}p=m-n;google.rll(window,!1,function(){google.tick("load",h);google.c.e("load","imc",String(n));google.c.e("load","imn",String(m));google.c.e("load","imp",String(p));google.c.u("pr")});google.tick("load",[k,f]);google.c.c.e&&(google.tick("webaft",[k,e]),0==q&&
//v())}google.c.c.n&&0<document.getElementsByClassName("native_iml_flag").length&&google.c.b("ncr")})();}).call(this);



// fin
