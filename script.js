// Lista de imágenes para los pop-ups
const popupImages = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    // Agrega más imágenes según sea necesario
];

// Número de pop-ups que se mostrarán
const numberOfPopups = 20;

// Función para crear y mostrar un nuevo pop-up
function createPopup() {
    // Selecciona una imagen aleatoria
    const randomImage = popupImages[Math.floor(Math.random() * popupImages.length)];

    // Crea un nuevo elemento de pop-up
    const newPopup = document.createElement('div');
    newPopup.classList.add('popup');

    // Crea una nueva imagen
    const newImage = document.createElement('img');
    newImage.src = randomImage;
    newImage.alt = 'Popup Image';

    // Agrega la imagen al pop-up
    newPopup.appendChild(newImage);

    // Posiciona el pop-up en una ubicación aleatoria
    const randomX = Math.floor(Math.random() * (window.innerWidth - 200));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 200));
    newPopup.style.left = `${randomX}px`;
    newPopup.style.top = `${randomY}px`;

    // Agrega el pop-up al cuerpo del documento
    document.getElementById('popups-container').appendChild(newPopup);

    // Establece un tiempo para eliminar el pop-up después de un tiempo (ajusta según sea necesario)
    setTimeout(() => {
        document.getElementById('popups-container').removeChild(newPopup);
    }, 5000);
}

// Función para mostrar pop-ups continuamente
function showPopups() {
    // Muestra un número específico de pop-ups
    for (let i = 0; i < numberOfPopups; i++) {
        createPopup();
    }

    // Llama a la función nuevamente para mostrar el siguiente conjunto de pop-ups después de 5 segundos
    setTimeout(showPopups, 5000);
}

// Inicia el ciclo de pop-ups automáticos
showPopups();
