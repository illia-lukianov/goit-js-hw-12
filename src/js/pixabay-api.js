import axios from 'axios';

const searchParams = {
  key: '49359598-9a4c243d7cce225cafe13dd3f',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
}

export default function queryToPixabayApi(searchData) {
  return axios.get("https://pixabay.com/api/", {
    params: {
      q: searchData,
      ...searchParams
    }
  });
};