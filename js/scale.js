import { MIN_SCALE, MAX_SCALE, DEFAULT_SCALE, SCALE_STEP } from './constant.js';

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const uploadImagePreview = document.querySelector('.img-upload__preview img');

let currentValue = DEFAULT_SCALE;

const renderScaleValue = () => {
  scaleInput.value = `${currentValue}%`;
};

const renderScaleImage = () => {
  uploadImagePreview.style.transform = `scale(${currentValue * 0.01})`;
};

const onSmallerButtonClick = () => {
  currentValue = (currentValue - SCALE_STEP >= MIN_SCALE) ? currentValue - SCALE_STEP : MIN_SCALE;
  renderScaleValue();
  renderScaleImage();
};

const onBiggerButtonClick = () => {
  currentValue = (currentValue + SCALE_STEP <= MAX_SCALE) ? currentValue + SCALE_STEP : MAX_SCALE;
  renderScaleValue();
  renderScaleImage();
};


smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

const resetScale = () => {
  currentValue = DEFAULT_SCALE;
  renderScaleValue();
  renderScaleImage();
};

export { resetScale };
