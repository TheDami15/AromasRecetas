/*MÉTODO EN JS PARA EL HEADER DEL MENÚ*/
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
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


sr.reveal('.container', { delay: 400 });
sr.reveal('.slider', {});
sr.reveal('.middle-text', {});
sr.reveal('.row-btn,.shop-content', { delay: 200 });

sr.reveal('.review-content,.contact', { delay: 200 });
sr.reveal('.video', { delay: 200 });





// Obtener el elemento de video
document.addEventListener("DOMContentLoaded", function () {
    const videoPlayer = document.getElementById("videoPlayer");
    const audioPlayer = document.getElementById("audioPlayer");
    const playlistItems = document.querySelectorAll("#playlistItems a");
    const fastForwardButton = document.getElementById("fastForward");
    const backForwardButton = document.getElementById("backForward");
    const startSButton = document.getElementById("startForward");
    const pauseButton = document.getElementById("pause");
    const endButton = document.getElementById("end");

    const fullScreanButton = document.getElementById("fullbutton");

    function playMedia(media) {
        console.log(media);
        if (media.tagName === 'VIDEO') {
            audioPlayer.pause();
        } else if (media.tagName === 'AUDIO') {
            videoPlayer.pause();
        }
        media.play();
    }
    //inicio del vídeo
    function stopMedia(media) {
        media.pause();
        media.currentTime = 0;
    }

    function handleClick(media) {
        // Lógica a ejecutar cuando se hace clic en el botón
        fastFoward(media);
    }

    function fastFoward(media) {
        media.currentTime += 10;
    }
    function backFoward(media) {
        media.currentTime -= 10;
    }

    function togglePlayPause(media) {
        if (media.paused) {
          media.play();
        } else {
          media.pause();
        }
      }
      function goToVideoEnd(media) {
        media.currentTime = media.duration;
      }

    function setupProgressIndicator(media) {
        const progressBar = document.getElementById('progressBar');
        media.addEventListener('timeupdate', () => {
            const value = (media.currentTime / media.duration) * 100;
            progressBar.value = value;
        });

        // Opcional: Permitir buscar en el medio al mover el indicador de progreso
        progressBar.addEventListener('input', () => {
            const time = (progressBar.value / 100) * media.duration;
            media.currentTime = time;
        });
        
    }
    
    function setVolume(volumeLevel, media) {
        if (media) {
            media.volume = volumeLevel;
        }
    }

    function toggleFullscreen(media) {
        if (media) {
            if (media.requestFullscreen) {
                media.requestFullscreen();
            } else if (media.webkitRequestFullscreen) { // Safari
                media.webkitRequestFullscreen();
            } else if (media.mozRequestFullScreen) { // Firefox
                media.mozRequestFullScreen();
            } else if (media.msRequestFullscreen) { // IE11
                media.msRequestFullscreen();
            }
        }
    }



    function setMediaSource(media, src) {
        media.src = src;
    }

    function addEventListeners() {
        videoPlayer.addEventListener('timeupdate', function () {
            // Actualizar el indicador de progreso
            // Ejemplo: document.getElementById('progress').value = (videoPlayer.currentTime / videoPlayer.duration) * 100;
        });

        playlistItems.forEach(function (item) {
            item.addEventListener('click', function (event) {
                event.preventDefault();
                const src = this.getAttribute('data-src');
                fastForwardButton.removeEventListener('click', fastFoward);

                //Ir adelante 10s
                fastForwardButton.addEventListener('click', function() {
                    fastFoward(src.endsWith('.mp4') ? videoPlayer : audioPlayer);
                });
                //Ir atrás 10s
                backForwardButton.addEventListener('click', function() {
                    backFoward(src.endsWith('.mp4') ? videoPlayer : audioPlayer);
                });
                //Inicio
                startSButton.addEventListener('click', function() {
                    stopMedia(src.endsWith('.mp4') ? videoPlayer : audioPlayer);
                });
                //Pausa
                pauseButton.addEventListener('click', function() {
                    togglePlayPause(src.endsWith('.mp4') ? videoPlayer : audioPlayer);
                });
                //Final 
                endButton.addEventListener('click', function() {
                    goToVideoEnd(src.endsWith('.mp4') ? videoPlayer : audioPlayer);
                });
                //Barra de Pogreso
                setupProgressIndicator(src.endsWith('.mp4') ? videoPlayer : audioPlayer);
                document.getElementById('volumeControl').addEventListener('input', (e) => {
                    const volumeLevel = e.target.value;
                    setVolume(volumeLevel, src.endsWith('.mp4') ? videoPlayer : audioPlayer, src );
                });
                //Pantalla Completa
                fullScreanButton.addEventListener('click', function() {
                    toggleFullscreen(src.endsWith('.mp4') ? videoPlayer : audioPlayer);
                });
                setMediaSource(src.endsWith('.mp4') ? videoPlayer : audioPlayer, src);
                playMedia(src.endsWith('.mp4') ? videoPlayer : audioPlayer);
            });
        });
    }

    addEventListeners();
});




