$(document).ready(function() {
    // Animation de la photo en boucle
    function animatePhoto() {
        $('.photo-animation img').fadeOut(5000, function() {
            $(this).fadeIn(5000, animatePhoto);
        });
    }

    animatePhoto();

    // Animation du fond en boucle
    let colors = ['#f7e6b2', '#fcebae', '#f7e6b2']; // Couleurs du dégradé
    let currentColor = 0;

    function changeBackgroundColor() {
        $('.background-animation').animate({
            backgroundColor: colors[currentColor]
        }, 5000, function() {
            currentColor = (currentColor + 1) % colors.length;
        });
    }

    setInterval(changeBackgroundColor, 5000);

    // Animation du message (défilement à droite)
    function animateMessage() {
        $('.message').animate({
            left: '50px' // Déplace le message vers la droite
        }, 5000, function() {
            $('.message').animate({
                left: '-350px' // Redéplace le message hors de l'écran à gauche
            }, 5000, function() {
                animateMessage(); // Répète l'animation en boucle
            });
        });
    }

    animateMessage();

    // Contrôler la lecture audio
    const audioElement = document.getElementById('background-music');

    // Lire la musique
    function playMusic() {
        audioElement.play();
    }

    // Mettre en pause la musique
    function pauseMusic() {
        audioElement.pause();
    }

    // Arrêter la musique
    function stopMusic() {
        audioElement.pause();
        audioElement.currentTime = 0;
    }

    // Volume de la musique (0 à 1)
    function setVolume(volume) {
        audioElement.volume = volume;
    }

    // Exemple d'utilisation : joue la musique lorsque la page est chargée
    playMusic();

    // Exemple d'utilisation : Arrêter la musique après 10 secondes
    //setTimeout(stopMusic, 10000);

});
