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
                <p class="card-subtitle">Likes❤️: ${likes}</p>
                <p class="card-subtitle">Views👁️: ${views}</p>
                <p class="card-subtitle">Comments💬: ${comments}</p>
                <p class="card-subtitle">Downloads⬇️: ${downloads}</p>
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

export const showLoader = () => {
loader.classList.add('hidden');
};

export const hideLoader = () => {
loader.classList.remove('hidden');
};
