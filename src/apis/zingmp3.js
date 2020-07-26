import axios from 'axios';

/*
export default axios.create({
  baseURL: 'https://dalatcoder-mp3-app.herokuapp.com'
});
*/

const proxy = 'https://cors-anywhere.herokuapp.com/';
const url = 'http://ac.mp3.zing.vn/complete';
export default axios.create({
  baseURL: proxy + url,
  params: {
    type: 'artist,song,key,code',
    num: '5'
  }
});
