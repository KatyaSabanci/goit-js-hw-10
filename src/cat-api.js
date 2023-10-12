import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_fEVL6ePAnl7tZidM8kNgZkAiWXlHkirVjVwvLiNzuso7Df9dD7kMXiswOGOOWwWP';

export function fetchBreeds() {
  return axios.get('https://api.thecatapi.com/v1/breeds').then(response => {
    if (!response.ok) {
      throw new errorText(response.status);
    }
    return response.loaderText;
  });
}
