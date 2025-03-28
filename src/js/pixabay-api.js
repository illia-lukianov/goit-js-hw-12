import axios from 'axios';

const searchParams = {
  key: '49359598-9a4c243d7cce225cafe13dd3f',
  image_type: 'photo',
  per_page: 15,
  orientation: 'horizontal',
  safesearch: 'true',
}

export default async function queryToPixabayApi(searchData, page) {
  return await axios.get("https://pixabay.com/api/", {
    params: {
      page: page,
      q: searchData,
      ...searchParams
    }
  });
};