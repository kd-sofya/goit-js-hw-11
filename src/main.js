
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



import { getImagesByQuery } from './js/pixabay-api.js';
import {createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

const form = document.querySelector('.form');
const input = document.querySelector('#input');


form.addEventListener('submit', e => {
    e.preventDefault();

        const query = input.value.trim();
    if (!query) {
        iziToast.error({
        position: 'topRight',
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
    }
        
    showLoader();  
    clearGallery();

    getImagesByQuery(query)
        .then(result => {
            const img = result.hits;

            if (img.length === 0) {
                
                setTimeout(() => {  
                    iziToast.error({
                    position: 'topRight',
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
                }, 1000);
                input.value = '';
            } else {
                
                setTimeout(() => {  
                    createGallery(img); 
                    input.value = '';
                }, 1000);
                // createGallery(img);
                // console.log(result.data);
                // console.log(result.data.hits);
            }
        })
        .catch(error => {
                iziToast.error({
                position: 'topRight',
                message: 'Sorry',
            });
            console.error(error);
            })

        .finally(() => {
            hideLoader();
            });
});

