import { galleryItems } from './gallery-items.js';
// Change code below this line
const listGallery = document.querySelector('.gallery');
const listItemsGallery = createListItemsGallery(galleryItems);
listGallery.innerHTML = listItemsGallery;

function createListItemsGallery(items) {
    return items.map(item =>
        `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`).join('');

}
var lightbox = new SimpleLightbox('.gallery a', {captions: true, captionsData: 'alt', captionDelay: 250});

