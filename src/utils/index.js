export function getAudioURL(id) {
  return `http://api.mp3.zing.vn/api/streaming/audio/${id}/320`;
}

export function getCoverURL(coverURL) {
  return 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/' + coverURL;
}

export function getQueryURL(songTitle) {
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const url = `http://ac.mp3.zing.vn/complete?type=artist,song,key,code&num=500&query=${songTitle}`;
  return proxy + url;
}

export function formatDuration(time) {
  const mins = Math.floor(time / 60);
  const secs = time % 60;

  let formatted = '';

  if (mins < 10) {
    formatted += '0';
  }
  formatted += mins.toString();

  formatted += ':';

  if (secs < 10) {
    formatted += '0';
  }
  formatted += secs.toString();

  return formatted;
}

export function normalizeVietnameseString(string) {
  return string
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

export const debounce = (func, delay = 1000) => {
  let timeoutId;

  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};
