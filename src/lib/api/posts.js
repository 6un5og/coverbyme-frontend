import qs from 'qs';

import client from './client';

export const writePost = ({
  title,
  youtubeLink,
  description,
  originalTitle,
  originalSinger,
  category,
}) =>
  client.post('/api/posts', {
    title,
    youtubeLink,
    description,
    originalTitle,
    originalSinger,
    category,
  });

export const readPost = (id) => client.get(`/api/posts/${id}`);

export const listPosts = ({ page, username }) => {
  const queryString = qs.stringify({
    page,
    username,
  });
  return client.get(`/api/posts?${queryString}`);
};

export const updatePost = ({
  id,
  title,
  youtubeLink,
  description,
  originalTitle,
  originalSinger,
  category,
}) =>
  client.patch(`/api/posts/${id}`, {
    title,
    youtubeLink,
    description,
    originalTitle,
    originalSinger,
    category,
  });

export const removePost = (id) => client.delete(`/api/posts/${id}`);
