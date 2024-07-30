const API_KEY = '45178875-32da1f77bc846f3475731a3a6';
const BASE_URL = 'https://pixabay.com/api/';

const fetchImages = (query, page) => {
  return fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(response => response.json())
    .then(data => data.hits);
};

export default fetchImages;
