import { COMMENT_MAX_LENGTH, VALID_HASHTAG_SYMBOLS, COMMENT_MAX_COUNT } from './constant.js';

const form = document.querySelector('.img-upload__form');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const pristine = new Pristine(form,
  {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextTag: 'p',
    errorTextClass: 'form__error',
  });

const validateDescription = (value) => value.length <= COMMENT_MAX_LENGTH;

pristine.addValidator(
  commentField,
  validateDescription,
  `Длина строки не должна превышать ${COMMENT_MAX_LENGTH} символов`
);

const validateHashtag = (value) => {
  if (!value) {
    return true;
  }
  return !value
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .some((item) => !VALID_HASHTAG_SYMBOLS.test(item));
};

pristine.addValidator(
  hashtagField,
  validateHashtag,
  `хэш-тег начинается с символа # (решётка);
строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы(#, @, $ и т.п.), символы пунктуации(тире, дефис, запятая и т.п.), эмодзи и т.д.;
хеш - тег не может состоять только из одной решётки;
максимальная длина одного хэш - тега 20 символов, включая решётку`

);
const validateHashtagsCount = (value) => value
  .replace(/\s+/g, ' ')
  .trim()
  .split(' ').length <= COMMENT_MAX_COUNT;


pristine.addValidator(
  hashtagField,
  validateHashtagsCount,
  `Количество хэштегов не должно превышать ${COMMENT_MAX_COUNT}`
);

const validateUniqeHashtag = (value) => {
  const hashtags = value
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ');
  const hashtagsSet = new Set(hashtags);

  return hashtags.length === hashtagsSet.size;
};

pristine.addValidator(
  hashtagField,
  validateUniqeHashtag,
  'Хэштеги не должы повторяться'
);

const validateForm = () => pristine.validate();

export { validateForm };
