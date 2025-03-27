import queryToPixabayApi from './js/pixabay-api';
import renderMarkUp from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loader = document.querySelector('#loader');
const div = document.querySelector('.container');
const paginationButton = document.querySelector('.load-more-button');
let page = 1;

loader.classList.remove('loader');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const searchData = event.currentTarget.elements.searchText.value.trim();

  if (!validateDataFromForm(searchData)) {
    return;
  }

  loader.classList.add('loader');


  paginationButton.addEventListener('click', () => {
    page +=1;
  })

  const responceFromPixabay = (await queryToPixabayApi(searchData, page)).data.hits;
  
  try {
    if (!validateDataFromAPI(responceFromPixabay)) {
      console.error('Invalid data from API, or no matching result');
     }
   
     renderMarkUp(responceFromPixabay);
     loader.classList.remove('loader');
     div.classList.remove('center');
  } catch (error) {
    iziToast.info({
      mesage: 'Sorry, we have a problems, try later',
    })
  }
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
