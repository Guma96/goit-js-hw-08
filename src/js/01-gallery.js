import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryElements = galleryItems.map((item) => 
    `
    <a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>
  `
    )
    .join("");

gallery.insertAdjacentHTML('beforeend', galleryElements);

const biggerImg = new SimpleLightbox ( '.gallery a', {  
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    });