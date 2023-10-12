import axios from 'axios';
import { fetchBreeds } from './cat-api';

axios.defaults.headers.common['x-api-key'] =
  'live_fEVL6ePAnl7tZidM8kNgZkAiWXlHkirVjVwvLiNzuso7Df9dD7kMXiswOGOOWwWP';

const BASE_URl = 'https://api.thecatapi.com/v1/';
const END_POINT = 'breeds';

const option = new URLSearchParams();
const refs = {
  breedSelect: document.getElementsByClassName('breed-select'),
  loaderText: document.getElementsByClassName('loader'),
  errorText: document.getElementsByClassName('error'),
  catInfo: document.getElementsByClassName('cat-info'),
};

fetchBreeds()
  .then(loaderText => {
    console.log(loaderText);
  })
  .catch(errorText => {
    console.log(errorText);
  });
