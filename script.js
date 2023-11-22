// Lista de imágenes para los pop-ups
const popupImages = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    // Agrega más imágenes según sea necesario
];

// Número de pop-ups que se mostrarán
const numberOfPopups = 20;

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

// Función para agregar una entrada al blog
function addBlogEntry(title, content) {
    const blogSection = document.getElementById('blog');

    const newEntry = document.createElement('article');
    const entryTitle = document.createElement('h2');
    entryTitle.textContent = title;
    const entryContent = document.createElement('p');
    entryContent.textContent = content;

    newEntry.appendChild(entryTitle);
    newEntry.appendChild(entryContent);
    blogSection.appendChild(newEntry);
}

// Función para agregar un producto al carrito
function addToCart(product, price) {
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total-price');

    const cartItems = parseInt(cartItemsElement.textContent);
    cartItemsElement.textContent = cartItems + 1;

    const total = parseInt(totalElement.textContent.replace('$', '')) + price;
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Ejemplo: Agregar una entrada al blog después de 10 segundos
setTimeout(() => {
    addBlogEntry('Nuevo Artículo', 'Este es un nuevo artículo sobre compras.');
}, 10000);

// Inicia el ciclo de pop-ups automáticos
showPopups();
