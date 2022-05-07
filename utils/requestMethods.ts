import axios from 'axios';

let user;
if (typeof window !== 'undefined') {
  user = JSON.parse(localStorage.getItem('persist:root'))?.user;
}
const currentUser = user && JSON.parse(user).currentUser;
const token = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: '/api/',
});

export const userRequest = axios.create({
  baseURL: '/api/',
  headers: { token: `Bearer ${token}` },
});
