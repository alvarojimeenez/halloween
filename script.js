// Obtenemos un array con las cartas y otro con los overlays
let listCard = document.querySelectorAll("div[class=card]");
let overlays = document.querySelectorAll("div[class*=overlay-text]");

// Inicializamos las variables
let gameStarted = false; // Variable que controla si el juego está iniciado 
let cardToCheck = null; // Variable que contiene la carta que se ha levantado primero
let totalClicks = 0; // Número de cartas que se han descubierto
let matchedCards = []; // Array con las cartas emparejadas
// Booleano que controla si el juego está ocupado y no se pueden voltear las cartas
let busy = false; 
// Variable que contendrá la cuenta atrás, debe estar declarada fuera para detenerla en caso de victoria
let countdown; 

// Inicializamos los sonidos a partir de los ficheros
const flipSound = new Audio('Assets/Audio/flip.wav');
const matchSound = new Audio('Assets/Audio/match.wav');
const victorySound = new Audio('Assets/Audio/victory.wav');
const gameOverSound = new Audio('Assets/Audio/gameOver.wav');
const bgMusic = new Audio('Assets/Audio/creepy.mp3');
bgMusic.volume = 0.5;
bgMusic.loop = true;


// Función para reproducir sonidos
// Ejemplo:
// playSound(matchSound); Reproducira el sonido de match
function playSound(sound) {
    sound.play();
}

// Función para detener sonidos
function stopSound(sound) {
    sound.pause();
}

// Función para barajar las cartas
function shuffleCards(cardsArray) {
    for (let i = cardsArray.length - 1; i > 0; i--) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        cardsArray[randIndex].style.order = i;
        cardsArray[i].style.order = randIndex;
    }
}

// Función para iniciar el juego
// Recibe el tiempo de juego y el array de cartas
function startGame(totalTime, cardsArray) {

    // Inicializamos las variables del juego
    gameStarted=true;

    // Marcamos que el juego está ocupado
    busy = true;

    // Barajamos las cartas
    shuffleCards(cardsArray);
    
    // Iniciar el temporizador y el contador de clicks y ocultar las cartas
    // Recordar actualizar ambos también en la interfaz
    document.getElementById("flips").innerHTML=0;
    document.getElementById('time-remaining').innerHTML=100
    hideCards(cardsArray);

    // Actualizamos el tiempo restante cada segundo
    countdown = setInterval(function(){ 
        totalTime= document.getElementById('time-remaining').innerHTML-=1;
        if (totalTime==0){
            clearInterval(countdown);
            gameOver();
        } 
    }, 1000);
    // y comprobamos si el tiempo ha llegado a 0. 
    // En ese caso paramos el intervalo y finalizamos el juego.
    // Pista: setInterval, recuerda usar la variable countdown para poder pararlo
    // en caso de victoria
    

    // Marcamos el juego como no ocupado
    busy = false;
    // Iniciamos la música de fondo
    playSound(bgMusic);
}

// Función para manejar el final del juego
function gameOver() {
    // Detenemos la cuenta atrás
    clearInterval(countdown);
    // Suena el sonido de game over
    playSound(gameOverSound);
    // Mostramos el texto de game over, para ello tenemos la clase visible
    overlays[1].classList.add("visible")
    // Paramos la música de fondo
    stopSound(bgMusic);
}


// Función para manejar la victoria
function victory() {
    // Detenemos la cuenta atrás
    clearInterval(countdown);
    // Suena el sonido de victoria
    playSound(victorySound);
    // Mostramos el texto de victoria, para ello tenemos la clase visible
    overlays[2].classList.add("visible")
    // Paramos la música de fondo
    stopSound(bgMusic);
}

// Función para ocultar todas las cartas al comienzo del juego
function hideCards(cardsArray) {
    // Le quitamos a cada carta la clse visible y la clase matched
    cardsArray.forEach(card=>{
        card.classList.remove("visible");
        card.classList.remove("matched");
})
}

// Función para comprobar si se puede voltear una carta
function canFlipCard(card) {
    // Comprobamos que el juego no esté ocupado, que la carta no esté emparajada
    // y que no le hayamos dado la vuelta a la carta
    return !busy && !card.classList.contains("matched") && !card.classList.contains("visible");
}
// Función para voltear una carta
function flipCard(card) {
    // Comprobamos si podemos darle la vuelta a la carta
    if (!canFlipCard(card)) return;

        // Incrementamos el número de clicks, recuerda hacerlo también en la interfaz
    totalClicks++;
    document.querySelector("span[id=flips]").innerHTML=totalClicks;

    // Hacemos visible la carta
    card.classList.add("visible");

    // Si hay otra carta ya descubierta comprobamos si es igual
    if (cardToCheck!=null){
        checkForCardMatch(card)
    }else {
        cardToCheck = card
    }
    // si no la marcamos como carta a comprobar
    
}

// Función para verificar si dos cartas coinciden
function checkForCardMatch(card) {
    // Código para verificar si dos cartas coinciden
    // Si coinciden llamamos a la función cardMatch
    // sino coinciden llamamos a cardMismatch
    if (getCardType(cardToCheck) == getCardType(card)){
        cardMatch(cardToCheck,card);
    }else {
        cardMismatch(cardToCheck,card)
    }

    cardToCheck = null;
}

// Función para manejar una coincidencia de cartas
function cardMatch(card1, card2) {
    // Añadimos las cartas a las emparejadas
    matchedCards.push(card1,card2);

    // Añadimos la clase matched a las cartas
    card1.classList.add("matched");
    card2.classList.add("matched");

    // Hacemos sonar el sonido de match
    playSound(matchSound);
    // Comprobamos si ya están todas emparejadas, en cuyo caso
    // llamamos a la función victory
    if (listCard.length == matchedCards.length) {
        victory();
    }
}

// Función para manejar cartas que no coinciden
function cardMismatch(card1, card2) {
    // Marcamos el juego como ocupado
    busy = true;

    // Establecemos un retraso de 1 segundo y
    // eliminamos la clase visible de ambas cartas y 
    // marcamos el juego como no ocupado
   setTimeout(function(){
    card1.classList.remove("visible");
    card2.classList.remove("visible");
    busy = false;
   },1000)
}

// Función para obtener el tipo de carta a partir de la imagen
function getCardType(card) {
    // Devolvemos el valor de la carta
    return card.querySelector("img[class=card-value]").src;
}

// Event Listener para el clic en overlays
// Añadimos el eventListener para el evento clic a cada overlay
// en él se elimina la clase visible y se inicializa el juego

overlays[0].addEventListener("click", function(){
    overlays[0].setAttribute("class", "overlay-text");
    startGame(100, listCard);   
})

overlays[1].addEventListener("click", function(){
    overlays[1].setAttribute("class", "overlay-text");
    startGame(100, listCard);   
})

overlays[2].addEventListener("click", function(){
    overlays[2].setAttribute("class", "overlay-text");
    startGame(100, listCard);   
})


listCard.forEach(card=>(
    card.addEventListener("click",function(){
    flipCard(card);
    })
))


// Event Listener para el clic en las cartas
// en él damos la vuelta a la carta
