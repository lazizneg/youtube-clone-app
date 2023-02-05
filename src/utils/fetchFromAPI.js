import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '674b1ac75bmsh73f85627041ac7cp11b677jsn1e1cce714c32',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};