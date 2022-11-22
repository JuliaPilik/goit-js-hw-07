import { galleryItems } from './gallery-items.js';
// Change code below this line
const listGallery = document.querySelector('.gallery');
const listItemsGallery = createListItemsGallery(galleryItems);
listGallery.innerHTML = listItemsGallery;

function createListItemsGallery(items) {
    return items.map(item =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join('');
}

listGallery.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
  
    if (!(event.target.classList.contains('gallery__image')||event.target.classList.contains('gallery__link'))) {
        return;
    } else {
        event.preventDefault();
      
      const instance = basicLightbox.create(`<img width="1280" height="855" src="${event.target.dataset.source}">`, {
        onShow: (instance) => {
          document.addEventListener("keydown", onEscapeButton);
        },
        onClose: (instance) => {
          document.removeEventListener("keydown", onEscapeButton);
        }
      });
      instance.show();
      
      function onEscapeButton(evt) {
        if (evt.key === "Escape") {
          instance.close();
          
    }
  }
        
    }
}

