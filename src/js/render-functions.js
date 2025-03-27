import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

export default function renderMarkUp(responce) {
    const markup = responce.map(image => {
        const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = image;
        return `<li class="gallery-item">
            <a href="${largeImageURL}"><img class="item-image" src="${webformatURL}" alt="${tags}"></a>
            <div class="image-info">
                <ul>
                    <p class="item-likes"><span class="info-accent">Likes</span>${likes}</p>
                    <p class="item-views"><span class="info-accent">Views</span>${views}</p>
                    <p class="item-comments"><span class="info-accent">Comments</span>${comments}</p>
                    <p class="item-downloads"><span class="info-accent">Downloads</span>${downloads}</p>
                </ul>
            </div>
        </li>`
    }).join("");
    gallery.innerHTML = '';
    gallery.insertAdjacentHTML('beforeend', markup);
    const lightbox = new SimpleLightbox('.gallery a');
    lightbox.refresh();
}