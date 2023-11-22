// Lista de imágenes para los pop-ups
const popupImages = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    // Agrega más imágenes según sea necesario
];

// Número de pop-ups que se mostrarán
const numberOfPopups = 20;

// Función para agregar un producto al carrito
function addToCart(productName, price) {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Crear un nuevo elemento de lista para el carrito
    const newItem = document.createElement('li');
    newItem.textContent = `${productName} - $${price}`;

    // Agregar el nuevo elemento al carrito
    cartItems.appendChild(newItem);

    // Calcular el nuevo total y mostrarlo
    const totalPrice = calculateTotalPrice(cartItems);
    totalPriceElement.textContent = `Total: $${totalPrice}`;

    // Mostrar un pop-up indicando que se ha agregado al carrito
    showPopup(`¡${productName} ha sido agregado al carrito!`, '');
}

// Función para calcular el precio total del carrito
function calculateTotalPrice(cartItems) {
    let totalPrice = 0;
    // Recorrer los elementos del carrito y sumar los precios
    cartItems.childNodes.forEach(item => {
        const price = parseFloat(item.textContent.split('$')[1]);
        totalPrice += price;
    });
    return totalPrice.toFixed(2);
}

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
function movePopup(popup) {
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

        popup.style.left = `${x}px`;
        popup.style.top = `${y}px`;

        requestAnimationFrame(animate);
    }

    animate();

    setTimeout(() => {
        document.getElementById('popups-container').removeChild(popup);
    }, 5000);
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

