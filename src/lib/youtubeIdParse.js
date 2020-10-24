import qs from 'qs';

const youtubeIdParse = (originalUrl) => {
  const { v: v_id } = qs.parse(originalUrl.split('?')[1]);

  return v_id;
};

export default youtubeIdParse;
