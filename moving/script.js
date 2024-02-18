let currentIndex = 0;
let images = ['defaultImage.jpg']; // Aggiunta dell'immagine di default all'inizio dell'array

function uploadPhotos() {
    const fileInput = document.getElementById('fileInput');
    const photoViewer = document.getElementById('photoViewer');

    const files = fileInput.files;
    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = function(event) {
                const imageUrl = event.target.result;
                images.push(imageUrl);
                images.push('defaultImage.jpg'); // Ripete l'aggiunta dell'immagine di default tra le immagini caricate dall'utente
                if (i === 0) {
                    showPhotoViewer();
                }
            }
            reader.readAsDataURL(file);
        }
    } else {
        showPhotoViewer(); // Visualizza comunque il visualizzatore con l'immagine di default se non ci sono immagini caricate dall'utente
    }
}

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
