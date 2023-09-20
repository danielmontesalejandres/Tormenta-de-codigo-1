/*function generateRandomNumber() {
    return Math.floor(Math.random() * 11);
  } */
  
// Generar un número aleatorio entre 0 y 10 al cargar la página
const numeroAleatorio = Math.floor(Math.random() * 11);

// Inicializar el contador de clics
let contadorClics = 0;

// Obtener elementos del DOM
const counterElement = document.getElementById('counter');
const redButton = document.querySelector('.red-button');
const betButton = document.querySelector('.bet-button');

// Manejar el clic en el botón rojo
redButton.addEventListener('click', () => {
  contadorClics++;
  counterElement.textContent = contadorClics;
});

// Manejar el clic en el botón de apuesta
betButton.addEventListener('click', () => {
  // Comprobar si la apuesta es correcta
  if (contadorClics === numeroAleatorio) {
    // Redirigir a la pantalla de felicitaciones
    window.location.href = 'congratulations.html';
  } else {
    // Mostrar mensaje de error
    alert('Apuesta incorrecta. ¡Inténtalo de nuevo!');
  }
});
