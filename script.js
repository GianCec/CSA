const images = [
 'assets/Gallery/(1).webp',
 'assets/Gallery/(2).webp',
 'assets/Gallery/(3).webp',
 'assets/Gallery/(4).webp',
 'assets/Gallery/(5).webp',
 'assets/Gallery/(6).webp',
 'assets/Gallery/(7).webp',
 'assets/Gallery/(8).webp'
];
let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function showImage(index) {
  galleryImage.src = images[index];
}

function showPreviousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

prevButton.addEventListener('click', showPreviousImage);
nextButton.addEventListener('click', showNextImage);

// Mostra la prima immagine all'avvio
showImage(currentIndex);

const menuToggle = document.querySelector('.menu-toggle');
		const nav = document.querySelector('nav');
		
		menuToggle.addEventListener('click', () => {
			nav.classList.toggle('active');
		});