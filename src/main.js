import queryToPixabayApi from './js/pixabay-api';
import renderMarkUp from './js/render-functions';
import { clearGallery } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const lightbox = null;
const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const div = document.querySelector('.container');
const paginationButton = document.querySelector('.load-more-button');

let searchData = '';
let totalHitsFromPixabay = 0;
let page = 1;

form.addEventListener('submit', async event => {
  event.preventDefault();
  searchData = event.currentTarget.elements.searchText.value.trim();

  if (!validateDataFromForm(searchData)) {
    return;
  }

  page = 1;

  loader.classList.remove('js-hidden');
  paginationButton.classList.add('js-hidden');
  
  try {
    const responce = (await queryToPixabayApi(searchData, page));
    totalHitsFromPixabay = responce.data.totalHits;
    const responceFromPixabay = responce.data.hits;
    clearGallery();
    uploadForPage(responceFromPixabay);
    pagination(searchData);
  } 
  catch (error) {
    iziToast.info({
      message: 'Sorry, we have a problems, try later',
    });
  };
});


function validateDataFromForm(searchData) {
  if (searchData === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please, input data to search.',
    });
    return false;
  }
  return true;
}

function uploadForPage (responceFromPixabay) {
  if (!validateDataFromAPI(responceFromPixabay)) {
    loader.classList.add('js-hidden');
    form.reset();
    return;
  };
  renderMarkUp(responceFromPixabay);
  auditForPaginationButton();
  loader.classList.add('js-hidden');
  div.classList.remove('center');
  form.reset();
}

function validateDataFromAPI(responceFromPixabay) {
  if (responceFromPixabay.length === 0) {
    iziToast.error({
      message:
      'Sorry, there are no images matching your search query. Please try again!',
    });
    return false;
  }
  return true;
}


function auditForPaginationButton () {
  if (gallery.children.length < totalHitsFromPixabay) {
    paginationButton.classList.remove('js-hidden');
  } else {
    paginationButton.classList.add('js-hidden');
    iziToast.error({
      message: "We`re sorry, but you`ve reached the end of search results."
    });
  }
}

paginationButton.addEventListener('click', async () => {pagination(searchData)})

async function pagination (searchData) {
    page +=1;
    paginationButton.classList.add('js-hidden');
    loader.classList.remove('js-hidden');

    try {
      const responceFromPixabay = (await queryToPixabayApi(searchData, page)).data.hits;
      uploadForPage(responceFromPixabay);
      scrollPage();
      paginationButton.classList.remove('js-hidden');
      loader.classList.add('js-hidden');
    } catch {
      iziToast.info({
        message: 'Sorry, we have a problems, try later',
      });
    };
  };


function scrollPage() {
  const image = gallery.querySelector('.gallery-item'); 
  if (image) {
    const cardHeight = image.getBoundingClientRect().height;
    window.scrollBy({
      top: 2 * cardHeight, 
      behavior: 'smooth',
    });
  }
}