import { openModal } from './modal.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const renderThumbnails = (photos) => {
  photos.forEach((item) => {
    const thumbnailElement = template.cloneNode(true);
    thumbnailElement.querySelector('.picture__img').src = item.url;
    thumbnailElement.querySelector('.picture__comments').textContent = item.comments.length;
    thumbnailElement.querySelector('.picture__likes').textContent = item.likes;
    thumbnailElement.dataset.id = item.id;

    fragment.append(thumbnailElement);
  });
  container.append(fragment);
  container.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('picture__img')) {
      const id = evt.target.closest('a').dataset.id * 1;
      const photo = photos.find((item) => item.id === id);
      openModal(photo);
    }
  });
};


export { renderThumbnails };
