import { galleryItems } from "./gallery-items.js"
// console.log(galleryItems)
// import * as basicLightbox from 'basiclightbox'




// Change code below this line
const refs = {
  gallaryEl: document.querySelector(".gallery"),
}

const gallleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
  }).join("")

refs.gallaryEl.insertAdjacentHTML("afterbegin", gallleryMarkup)

refs.gallaryEl.addEventListener('click', openModal)

let instance = null;
function openModal(e) {
  e.preventDefault()
  if (e.target.nodeName !== 'IMG') return false
  const dataScr = e.target.dataset.source;
  console.log(dataScr)
  instance = basicLightbox.create(`
    <img src="${dataScr}" width="800" height="600">
`)
  instance.show()
  document.addEventListener('keydown', closeModal)
}

function closeModal(e) {
  console.log(e.code)
  if (e.code === 'Escape') instance.close()
  refs.gallaryEl.removeEventListener('click', openModal)
}
