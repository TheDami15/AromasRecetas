const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 80);
});

// MENU
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

//SCROLL
const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2200,
    reset: true
})

sr.reveal ('.home-text',{delay:300});
sr.reveal ('.home-img',{delay:400});
sr.reveal ('.container',{delay:400});

sr.reveal ('.about-img',{});
sr.reveal ('.about-text',{delay:200});

sr.reveal ('.middle-text',{});
sr.reveal ('.row-btn,.shop-content',{delay:200});

sr.reveal ('.review-content,.contact',{delay:200});

//LOADER
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 1000);
}

window.onload = fadeOut;


//COOKIES
function setCookieWithOptions(cookieName, cookieValue, expirationDays, domain, path) {
    var d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    var cookieString = cookieName + "=" + cookieValue + ";" + expires + ";";
    if (domain) {
        cookieString += "domain=" + domain + ";";
    }
    if (path) {
        cookieString += "path=" + path + ";";
    }
    document.cookie = cookieString;
}
//Datos de la Vista
var fechaActual = new Date();
var dominio = window.location.hostname;
var ruta = window.location.pathname;
setCookieWithOptions("miCookie",fechaActual+" El Dominio es: "+dominio, 30, dominio, ruta); // NombreCookie, valor, expiración y ruta.

//Función para leer el nombre de la cookie
function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

// Obtener el valor de la cookie llamada "miCookie"
var valorCookie = getCookie("miCookie");
console.log("El Valor de la cookie es: ", valorCookie);
console.log(document.cookie);

//geolocation
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      console.log("Latitude: " + latitude + ", Longitude: " + longitude);
      
      // Aquí puedes utilizar la latitud y longitud para hacer lo que necesites, como mostrar un mapa usando una API de mapas como Google Maps.
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
  

