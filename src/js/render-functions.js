import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');


const lightbox = new SimpleLightbox('.gallery-link');

export default function renderMarkUp(responce) {
    const markup = responce.map(image => {
        const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = image;
        return `<li class="gallery-item">
            <a  class='gallery-link' href="${largeImageURL}"><img class="item-image" src="${webformatURL}" alt="${tags}"></a>
                <ul class = 'image-info'>
                    <li>
                        <p class="item-likes"><span class="info-accent">Likes</span>${likes}</p>
                    </li>
                    <li>
                        <p class="item-views"><span class="info-accent">Views</span>${views}</p>
                    </li>
                    <li>
                        <p class="item-comments"><span class="info-accent">Comments</span>${comments}</p>
                    </li>
                    <li>
                        <p class="item-downloads"><span class="info-accent">Downloads</span>${downloads}</p>
                    </li>
                </ul>
        </li>`
    }).join("");
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = '';
  }