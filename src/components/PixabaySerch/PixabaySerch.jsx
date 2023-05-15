import axios from 'axios';

export async function pixabaySerch(serchItem, page) {
  
    const API_URL = 'https://pixabay.com/api/';
    const API_KEY = '34824622-b8257b69f691181f3d9414f0f';
    const params = {
      key: API_KEY,
      q: serchItem,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page,
    };

    const images = await axios.get(API_URL, { params });
    return images.data;
};