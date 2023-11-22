function showPopup(imageSrc, description) {
    document.getElementById('popupImage').src = imageSrc;
    document.getElementById('popupDescription').innerText = description;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
