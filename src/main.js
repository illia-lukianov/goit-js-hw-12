import queryToPixabayApi from './js/pixabay-api';
import renderMarkUp from './js/render-functions';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const loader = document.querySelector('#loader');
const div = document.querySelector('.container');

loader.classList.remove('loader');

form.addEventListener('submit', event => {
    event.preventDefault();
    const searchData = event.currentTarget.elements.searchText.value.trim();

    if (!validateDataFromForm(searchData)) {
        return;
    };
    
loader.classList.add('loader');

queryToPixabayApi(searchData)
    .then((response) => {
        return response.data.hits;
    })
    .then((response) => {
        if (!validateDataFromAPI(response)) {
            throw new Error('Invalid data from API');
        }
        return response;
    })
    .then((response) => {
        div.classList.remove('center');
        renderMarkUp(response);
    })
    .catch((error) =>
        console.error('ERROR:', error)
        
    ).finally(() =>
        loader.classList.remove('loader')
    )
});


function validateDataFromForm(searchData) {
    if (searchData === '') {
         iziToast.error({
            title: 'Error',
            message: 'Please, input data to search.',
         })
        return false;
    }
    return true;
}

function validateDataFromAPI(responce) {
    if (responce.length === 0) {
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
        })
        return false;
    }
    return true;
}