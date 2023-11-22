// Lista de imágenes para los pop-ups
const popupImages = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    // Agrega más imágenes según sea necesario
];

// Número de pop-ups que se mostrarán
const numberOfPopups = 20;

// Duración en milisegundos que los pop-ups estarán en pantalla antes de desaparecer (10 segundos en este ejemplo)
const popupDuration = 10000;

// Función para crear y mostrar un nuevo pop-up con movimiento
function createPopup() {
    const randomImage = popupImages[Math.floor(Math.random() * popupImages.length)];
    const newPopup = document.createElement('div');
    newPopup.classList.add('popup');

    const newImage = document.createElement('img');
    newImage.src = randomImage;
    newImage.alt = 'Popup Image';

    newPopup.appendChild(newImage);
    document.getElementById('popups-container').appendChild(newPopup);

    // Inicia el movimiento del pop-up
    movePopup(newPopup);
}

// Función para mover un pop-up con rebote
function movePopup(newPopup) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let speedX = (Math.random() - 0.5) * 5;
    let speedY = (Math.random() - 0.5) * 5;

    function animate() {
        x += speedX;
        y += speedY;

        if (x + 200 > window.innerWidth || x < 0) {
            speedX = -speedX;
        }

        if (y + 200 > window.innerHeight || y < 0) {
            speedY = -speedY;
        }

        newPopup.style.left = `${x}px`;
        newPopup.style.top = `${y}px`;

        requestAnimationFrame(animate);
    }

    animate();

    // Event listener para eliminar el pop-up al pasar el mouse sobre él
    newPopup.addEventListener('mouseenter', () => {
        document.getElementById('popups-container').removeChild(newPopup);
    });

    // Reiniciar el temporizador al sacar el mouse del pop-up
    newPopup.addEventListener('mouseleave', resetTimer);

    // Función para reiniciar el temporizador del pop-up
    function resetTimer() {
        clearTimeout(popupTimer);
        popupTimer = setTimeout(() => {
            document.getElementById('popups-container').removeChild(newPopup);
        }, popupDuration);
    }

    // Inicia el temporizador al crear el pop-up
    let popupTimer = setTimeout(() => {
        document.getElementById('popups-container').removeChild(newPopup);
    }, popupDuration);
}

// Función para mostrar pop-ups continuamente
function showPopups() {
    for (let i = 0; i < numberOfPopups; i++) {
        createPopup();
    }

    // Llama a la función nuevamente para mostrar el siguiente conjunto de pop-ups después de 5 segundos
    setTimeout(showPopups, 5000);
}

// Inicia el ciclo de pop-ups automáticos
showPopups();
