import { getRandomInteger, createRandomIdFromRangeGenerator } from './util.js';

const PHOTOS_COUNT = 25;
const DESCRIPTION = [
  'Это кот',
  'Это слон',
  'Это я',

];
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MAX_COMMENTS_COUNT = 5;
const COMMENTS_COUNT = 50000;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !',
];
const NAMES = [
  'Иван',
  'Артем',
  'Ольга',
];


const getUniqueId = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const getUniqueUrl = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const getUniqueCommentId = createRandomIdFromRangeGenerator(1, COMMENTS_COUNT);

const createComment = () => ({
  id: getUniqueCommentId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

const createComments = (commentsCount) => {
  const comments = [];
  for (let i = 1; i <= commentsCount; i++) {
    comments.push(createComment());
  }
  return comments;
};

const createPhoto = () => ({
  id: getUniqueId(),
  url: `photos/${getUniqueUrl()}.jpg`,
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: createComments(getRandomInteger(0, MAX_COMMENTS_COUNT)),

});


const createPhotos = (photosCount) => {
  const photos = [];
  for (let i = 1; i <= photosCount; i++) {
    photos.push(createPhoto());
  }
  return photos;
};

export { createPhotos };


