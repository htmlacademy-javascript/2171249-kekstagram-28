const modal = document.querySelector('.big-picture');
const buttonClose = document.querySelector('.big-picture__cancel');

const socialCommentsLoader = document.querySelector('.social__comments-loader');

const commentTemplate = document.querySelector('.social__comment');
const commentsContainer = document.querySelector('.social__comments');

const commentsArray = [];
let totalComments = 0;

let renderedComments = 0;

const showModal = () => {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const hideModal = () => {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');

};

const renderComment = (item) => {
  const commentsElement = commentTemplate.cloneNode(true);
  commentsElement.querySelector('.social__picture').src = item.avatar;
  commentsElement.querySelector('.social__text').textContent = item.message;
  renderedComments = renderedComments + 1;
  return commentsElement;
};

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((item) => {
    fragment.append(renderComment(item));
  });
  return fragment;
};

const renderPortionComments = () => {
  const commentsPortion = commentsArray.splice(0, 5);
  commentsContainer.append(renderComments(commentsPortion));
  modal.querySelector('.social__comment-count').innerHTML = `${renderedComments} из <span class="comments-count">${totalComments}</span> комментариев`;
  if (renderedComments < totalComments) {
    socialCommentsLoader.classList.remove('hidden');
  } else {
    socialCommentsLoader.classList.add('hidden');
  }
};

const renderModal = (photo) => {
  modal.querySelector('.big-picture__img img').src = photo.url;
  modal.querySelector('.likes-count').textContent = photo.likes;

  renderPortionComments();

};

buttonClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  hideModal();
});

const onEscapeKey = (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    hideModal();
    document.removeEventListener('keydown', onEscapeKey);
  }

};

socialCommentsLoader.addEventListener('click', (evt) => {
  evt.preventDefault();
  renderPortionComments();
});

const openModal = (photo) => {

  commentsArray.length = 0;
  commentsArray.push(...photo.comments.slice());
  renderedComments = 0;
  totalComments = photo.comments.length;
  commentsContainer.innerHTML = '';

  showModal();
  renderModal(photo);
  document.addEventListener('keydown', onEscapeKey);

};

export { openModal };


