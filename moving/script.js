let currentIndex = 0;
let images = ['defaultImage.jpg']; // Aggiunta dell'immagine di default all'inizio dell'array
const fileInput = document.getElementById('fileInput');
const previewContainer = document.getElementById('previewContainer');
const uploadButton = document.getElementById('uploadButton');

fileInput.addEventListener('change', handleFileSelect);
uploadButton.addEventListener('click', uploadPhotos); // Aggiunta dell'evento di clic sul pulsante "Carica"

function handleFileSelect(event) {
    const files = event.target.files;
    handleFiles(files);
}

// Dopo la parte relativa alla gestione del caricamento delle immagini

function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.name === 'defaultImage.png') {
            continue; // Ignora l'immagine di default
        }

        const reader = new FileReader();
        reader.onload = function(event) {
            const imageUrl = event.target.result;
            images.push(imageUrl);
            images.push('defaultImage.jpg'); // Ripete l'aggiunta dell'immagine di default tra le immagini caricate dall'utente

            // Aggiungi un'anteprima dell'immagine alla preview
            const img = document.createElement('img');
            img.src = imageUrl;
            img.classList.add('preview-image');
            previewContainer.appendChild(img); // Aggiunge l'anteprima all'elemento previewContainer
        }
        reader.readAsDataURL(file);
    }
}


function uploadPhotos() {
    const photoViewer = document.getElementById('photoViewer');
    const fileInput = document.getElementById('fileInput');
    const container = document.querySelector('.container'); // Seleziona il div container

    const files = fileInput.files;
    setupSortable();

    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = function(event) {
                const imageUrl = event.target.result;
                images.push(imageUrl);
                images.push('defaultImage.jpg'); // Ripete l'aggiunta dell'immagine di default tra le immagini caricate dall'utente
            }
            reader.readAsDataURL(file);
        }
        // Rimuovi l'ultima immagine aggiunta, che è l'immagine di default aggiunta più recentemente
        images.pop();
        // Visualizza il visualizzatore di foto solo dopo che tutte le immagini sono state caricate
        showPhotoViewer();
    } else {
        showPhotoViewer(); // Visualizza comunque il visualizzatore con l'immagine di default se non ci sono immagini caricate dall'utente
    }
    container.style.display = 'none';
}

function setupSortable() {
    const imagess = Array.from(previewContainer.querySelectorAll('.preview-image'));
    Sortable.create(previewContainer, {
        animation: 150,
        onEnd: function(evt) {
            const newOrder = imagess.map(image => image.id);
            console.log(newOrder); // Stampa l'ordine aggiornato delle immagini nella console
            // Qui puoi aggiornare l'ordine delle immagini nel tuo array o fare altre operazioni
        }
    });
}


// Dopo aver aggiunto le immagini al previewContainer

// Configura Sortable per il contenitore delle anteprime delle immagini
Sortable.create(previewContainer, {
    animation: 150, // Durata dell'animazione in millisecondi
    onEnd: function(evt) {
        // Funzione chiamata quando un elemento viene rilasciato dopo essere stato trascinato
        const images = Array.from(previewContainer.querySelectorAll('.preview-image'));
        const newOrder = images.map(image => image.id);
        console.log(newOrder); // Stampa l'ordine aggiornato delle immagini nella console
        // Qui puoi aggiornare l'ordine delle immagini nel tuo array o fare altre operazioni
    }
});

function showPhotoViewer() {
    const photoViewer = document.getElementById('photoViewer');
    photoViewer.innerHTML = ''; // Pulisce il contenuto del visualizzatore
    photoViewer.classList.add('active');

    // Visualizza l'immagine corrente
    const imageUrl = images[currentIndex];
    showImage(imageUrl);
}

function showNextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    const imageUrl = images[currentIndex];
    showImage(imageUrl);
}

function showPreviousImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    const imageUrl = images[currentIndex];
    showImage(imageUrl);
}

function showImage(imageUrl) {
    const photoViewer = document.getElementById('photoViewer');
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    photoViewer.innerHTML = ''; // Pulisce il contenuto del visualizzatore
    photoViewer.appendChild(imageElement);
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        showNextImage();
    } else if (event.key === 'ArrowLeft') {
        showPreviousImage();
    } else if (event.key === 'Backspace') {
        window.location.href = 'index.html'; // Reindirizza l'utente alla pagina iniziale
    }
});

const photoViewer = document.getElementById('photoViewer');

photoViewer.addEventListener('touchstart', handleTouchStart, false);
photoViewer.addEventListener('touchmove', handleTouchMove, false);

let startX;

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    if (!startX) {
        return;
    }

    const xDiff = startX - event.touches[0].clientX;

    if (xDiff > 0) {
        // Swipe da destra a sinistra (per andare avanti)
        showNextImage();
    } else {
        // Swipe da sinistra a destra (per tornare indietro)
        showPreviousImage();
    }

    startX = null;
    event.preventDefault();
}