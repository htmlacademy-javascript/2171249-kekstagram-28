const COMMENT_MAX_LENGTH = 140;
const VALID_HASHTAG_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const COMMENT_MAX_COUNT = 5;

const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;
const SCALE_STEP = 25;

const ALERT_SHOW_TIME = 5000;
const ALERT_SHOW_MESSAGE = 'Обновите страницу';
const GET_DATA_URL = 'https://28.javascript.pages.academy/kekstagram/data';
const POST_DATA_URL = 'https://28.javascript.pages.academy/kekstagram';
const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...',
};

const MAX_RANDOM_PHOTOS = 10;

export {
  COMMENT_MAX_LENGTH,
  VALID_HASHTAG_SYMBOLS,
  COMMENT_MAX_COUNT,
  MIN_SCALE,
  MAX_SCALE,
  DEFAULT_SCALE,
  SCALE_STEP,
  ALERT_SHOW_TIME,
  GET_DATA_URL,
  POST_DATA_URL,
  ALERT_SHOW_MESSAGE,
  SubmitButtonText,
  MAX_RANDOM_PHOTOS,
};
