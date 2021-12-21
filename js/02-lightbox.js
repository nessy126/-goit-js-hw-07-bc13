import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
  gallaryEl: document.querySelector(".gallery"),
}

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  }).join("")

refs.gallaryEl.insertAdjacentHTML("afterbegin", galleryMarkup)

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
