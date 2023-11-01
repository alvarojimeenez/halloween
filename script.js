// Obtenemos un array con las cartas y otro con los overlays


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


    // Marcamos que el juego está ocupado


    // Barajamos las cartas
    
    
    // Iniciar el temporizador y el contador de clicks y ocultar las cartas
    // Recordar actualizar ambos también en la interfaz
    

    // Actualizamos el tiempo restante cada segundo
    // y comprobamos si el tiempo ha llegado a 0. 
    // En ese caso paramos el intervalo y finalizamos el juego.
    // Pista: setInterval, recuerda usar la variable countdown para poder pararlo
    // en caso de victoria
    

    // Marcamos el juego como no ocupado

    // Iniciamos la música de fondo

}

// Función para manejar el final del juego
function gameOver() {
    // Detenemos la cuenta atrás
   
    // Suena el sonido de game over
   
    // Mostramos el texto de game over, para ello tenemos la clase visible
   
    // Paramos la música de fondo
}


// Función para manejar la victoria
function victory() {
    // Detenemos la cuenta atrás
   
    // Suena el sonido de victoria
   
    // Mostramos el texto de victoria, para ello tenemos la clase visible
   
    // Paramos la música de fondo

}

// Función para ocultar todas las cartas al comienzo del juego
function hideCards(cardsArray) {
    // Le quitamos a cada carta la clse visible y la clase matched
    
}

// Función para comprobar si se puede voltear una carta
function canFlipCard(card) {
    // Comprobamos que el juego no esté ocupado, que la carta no esté emparajada
    // y que no le hayamos dado la vuelta a la carta

}

// Función para voltear una carta
function flipCard(card) {
    // Comprobamos si podemos darle la vuelta a la carta
    if (!canFlipCard(card)) return;
    // Incrementamos el número de clicks, recuerda hacerlo también en la interfaz
    

    // Hacemos visible la carta
    

    // Si hay otra carta ya descubierta comprobamos si es igual
    // si no la marcamos como carta a comprobar
    
}

// Función para verificar si dos cartas coinciden
function checkForCardMatch(card) {
    // Código para verificar si dos cartas coinciden
    // Si coinciden llamamos a la función cardMatch
    // sino coinciden llamamos a cardMismatch
}

// Función para manejar una coincidencia de cartas
function cardMatch(card1, card2) {
    // Añadimos las cartas a las emparejadas
    

    // Añadimos la clase matched a las cartas
    

    // Hacemos sonar el sonido de match
    playSound(matchSound);
    // Comprobamos si ya están todas emparejadas, en cuyo caso
    // llamamos a la función victory
    
}

// Función para manejar cartas que no coinciden
function cardMismatch(card1, card2) {
    // Marcamos el juego como ocupado
    

    // Establecemos un retraso de 1 segundo y
    // eliminamos la clase visible de ambas cartas y 
    // marcamos el juego como no ocupado
   
}

// Función para obtener el tipo de carta a partir de la imagen
function getCardType(card) {
    // Devolvemos el valor de la carta

}

// Event Listener para el clic en overlays
// Añadimos el eventListener para el evento clic a cada overlay
// en él se elimina la clase visible y se inicializa el juego


// Event Listener para el clic en las cartas
// en él damos la vuelta a la carta

