// Lista de imágenes para los pop-ups
const popupImages = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    // Agrega más imágenes según sea necesario
];

// Función para mostrar un pop-up específico
function showPopup(imageSrc, description) {
    document.getElementById('popupImage').src = imageSrc;
    document.getElementById('popupDescription').innerText = description;
    document.getElementById('popup').style.display = 'block';

    // Establece un tiempo para cerrar automáticamente el pop-up después de 5 segundos
    setTimeout(() => {
        closePopup();
    }, 5000);
}

// Función para cerrar el pop-up
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Función para mostrar pop-ups continuamente
function showPopups() {
    // Establece un tiempo aleatorio para mostrar el próximo pop-up
    const randomTime = Math.floor(Math.random() * (500 - 100 + 1) + 100);
    setTimeout(() => {
        // Selecciona una imagen aleatoria
        const randomImage = popupImages[Math.floor(Math.random() * popupImages.length)];
        // Muestra el pop-up con la imagen aleatoria y una descripción
        showPopup(randomImage, 'Descripción aleatoria');
        // Llama a la función nuevamente para mostrar el siguiente pop-up
        showPopups();
    }, randomTime);
}

// Inicia el ciclo de pop-ups automáticos
showPopups();
