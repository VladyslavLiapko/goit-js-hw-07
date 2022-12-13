import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup (galleryItems);

galleryContainer.insertAdjacentHTML('beforeend',galleryMarkup);

galleryContainer.addEventListener('click',onGalleryContainerClick);

function createGalleryItemsMarkup (galleryItems) {
    return galleryItems.map(item => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </div>
    `;
}).join('');

}

function onGalleryContainerClick (event) {
    event.preventDefault();
    const originalSize = event.target.getAttribute('data-source');
    const instance = basicLightbox.create(`<img src="${originalSize}">`);

    instance.show();

}




