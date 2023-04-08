import { renderThumbnails } from './thumbnails.js';
import { MAX_RANDOM_PHOTOS } from './constant.js';
import { debounce } from './util.js';

const imageFilters = document.querySelector('.img-filters');
const photos = [];
const showFilters = () => {
  imageFilters.classList.remove('img-filters--inactive');
};

const filterPhotos = (id) => {
  switch (id) {
    case 'filter-default':
      return photos;
    case 'filter-random':
      return [...photos]
        .sort(() => Math.random() - 0.5)
        .slice(0, MAX_RANDOM_PHOTOS);
    case 'filter-discussed':
      return [...photos].sort((a, b) => b.comments.length - a.comments.length);
  }
};

imageFilters.addEventListener('click', debounce((evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    const id = evt.target.id;
    document.querySelectorAll('.picture').forEach((item) => {
      item.remove();
    });
    renderThumbnails(filterPhotos(id));

  }
}));

const loadFilters = (photosData) => {
  photos.push(...photosData.slice());
  renderThumbnails(photosData);
  showFilters();
};


export { loadFilters };
