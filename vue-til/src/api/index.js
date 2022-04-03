import axios from 'axios';
import { setInterceptors } from './common/interceptors.js';

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

// 엑시오시 초기화 함수
function createInstanceWithAuth(url) {
  // axios를 요청 할때마다 같이 붙어서 나감.
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

export const instance = createInstance();
export const posts = createInstanceWithAuth('posts');
