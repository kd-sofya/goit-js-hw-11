import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a');

export const createGallery = images => {
    const imgMrkp = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `<a href="${largeImageURL}">
        <div class="card">
                <img class="card-image" src="${webformatURL}" alt="${tags}" width="370" height="334"/>
            <div class="card-body">
            <span class="card-body-title">
                <p class="card-subtitle">       
                 <svg class="icon-like" width="20" height="20">
                    <use xlink:href="#icon-heart"></use>
                </svg> <span class="span-js-num">${likes}</span></p>
                <p class="card-subtitle">               
                 <svg class="icon-eye" width="20" height="20">
                    <use xlink:href="#icon-eye"></use>
                 </svg> <span class="span-js-num">${views}</span></p>
                <p class="card-subtitle">               
                 <svg class="icon-com" width="20" height="20">
                    <use xlink:href="#icon-bubbles2"></use>
                 </svg> <span class="span-js-num">${comments}</span></p>
                <p class="card-subtitle">               
                 <svg class="icon-down" width="20" height="20">
                    <use xlink:href="#icon-cloud-upload"></use>
                 </svg> <span class="span-js-num">${downloads}</span></p>
            </span>
            </div>
        </div>
        </a>`
    )
        .join('');

    gallery.insertAdjacentHTML('beforeend', imgMrkp);
    lightbox.refresh();
};

export const clearGallery = () => {
  gallery.innerHTML = '';
};

export const hideLoader = () => {
loader.classList.add('hidden');
};

export const showLoader = () => {
loader.classList.remove('hidden');
};

