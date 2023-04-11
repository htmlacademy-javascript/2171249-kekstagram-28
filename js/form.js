import { validateForm } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { postData } from './api.js';
import { SubmitButtonText } from './constant.js';
import { onSuccess } from './popups.js';
import { onError } from './popups.js';
import { isEscape } from './util.js';

const form = document.querySelector('.img-upload__form');
const modal = document.querySelector('.img-upload__overlay');
const imagePreview = modal.querySelector('.img-upload__preview img');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const isTextfieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

const onDocumentKeydown = (evt) => {
  if (isEscape(evt.key) && !isTextfieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
};

const onCancelButtonClick = () => {
  hideModal();
};

const showModal = () => {

  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  resetScale();
  resetEffects();
};

const onFileInputChange = () => {
  showModal();
  const fileImage = fileField.files[0];
  imagePreview.src = URL.createObjectURL(fileImage);
};


function hideModal() {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  form.reset();
}

const blockUploadButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};
const unblockUploadButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (validateForm()) {
    blockUploadButton();
    postData(new FormData(form))
      .then((response) => {
        if (response.ok) {
          hideModal();
          onSuccess();
        } else {
          document.removeEventListener('keydown', onDocumentKeydown);
          onError();
        }
      })
      .catch(() => {
        document.removeEventListener('keydown', onDocumentKeydown);
        onError();
      })
      .finally(() => {
        unblockUploadButton();
      });
  }
};


fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);

export { onDocumentKeydown };
