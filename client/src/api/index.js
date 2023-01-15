import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8800/' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('bookmark-profile')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('bookmark-profile')).token}`;
  }

  return req;
});

export const fetchBookmarks = () => API.get('/bookmarks');
export const createBookmark = (newBookmark) => API.post('/bookmarks', newBookmark);
export const updateBookmark = (id, updatedBookmark) => API.patch(`/bookmarks/${id}`, updatedBookmark);
export const likeBookmark = (id) => API.patch(`/bookmarks/${id}/likeBookmark`);
export const deleteBookmark = (id) => API.delete(`/bookmarks/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);