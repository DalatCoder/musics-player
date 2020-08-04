export const getImageURL = imageRelativeURL => {
  return `https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/${imageRelativeURL}`;
};

export const getSongURL = songId => {
  return `http://api.mp3.zing.vn/api/streaming/audio/${songId}/320`;
};

export const formatDuration = time => {
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
};

export const normalizeVietnameseString = string => {
  return string
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
};
