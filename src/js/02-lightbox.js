
import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector(".gallery");
const list = galleryItems.reduce(
    (accumulator, {preview, description, original}) => 
    accumulator +
        `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    , ""
);

galleryEl.insertAdjacentHTML("afterbegin",list);

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData : "alt",
    captionDelay : 250

 });

