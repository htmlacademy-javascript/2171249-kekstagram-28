import { onDocumentKeydown } from './form.js';
import { isEscape } from './util.js';

const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const templateError = document.querySelector('#error').content.querySelector('.error');

const hideSuccess = () => {
  document.querySelector('.success__button').removeEventListener('click', onClickSuccessButton);
  document.removeEventListener('keydown', onEscapeSuccess);
  document.querySelector('.success').remove();
};

const hideError = () => {
  document.querySelector('.error__button').removeEventListener('click', onClickErrorButton);
  document.removeEventListener('keydown', onEscapeError);
  document.querySelector('.error').remove();
  document.addEventListener('keydown', onDocumentKeydown);
};

function onClickSuccessButton() {
  hideSuccess();
}

function onClickErrorButton() {
  hideError();
}


function onEscapeSuccess(evt) {
  if (isEscape(evt.key)) {
    hideSuccess();
  }
}

function onEscapeError(evt) {
  if (isEscape(evt.key)) {
    hideError();
  }
}

const onClickOverlaySuccess = (evt) => {
  if (evt.target.classList.contains('success')) {
    hideSuccess();
  }
};

const onClickOverlayError = (evt) => {
  if (evt.target.classList.contains('error')) {
    hideError();
  }
};

const onSuccess = () => {
  const elementSuccess = templateSuccess.cloneNode(true);
  document.body.append(elementSuccess);
  elementSuccess.querySelector('.success__button').addEventListener('click', onClickSuccessButton);
  document.addEventListener('keydown', onEscapeSuccess);
  document.querySelector('.success').addEventListener('click', onClickOverlaySuccess);
};

const onError = () => {
  const elementError = templateError.cloneNode(true);
  document.body.append(elementError);
  elementError.querySelector('.error__button').addEventListener('click', onClickErrorButton);
  document.addEventListener('keydown', onEscapeError);
  document.querySelector('.error').addEventListener('click', onClickOverlayError);
};

export { onSuccess, onError };
