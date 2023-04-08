import {
  GET_DATA_URL,
  POST_DATA_URL
} from './constant.js';


const getData = () =>
  fetch(GET_DATA_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error();
    });

const postData = (data) =>
  fetch(POST_DATA_URL, {
    method: 'post',
    body: data
  });


export { getData, postData };

