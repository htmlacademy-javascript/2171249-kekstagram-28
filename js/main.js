

import './form.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { ALERT_SHOW_MESSAGE } from './constant.js';
import { loadFilters } from './filters.js';


getData()
  .then((photosData) => {
    loadFilters(photosData);
  })
  .catch(() => {

    showAlert(ALERT_SHOW_MESSAGE);
  });
