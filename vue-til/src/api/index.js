import axios from 'axios';
import { setInterceptors } from './common/interceptors.js';

// 엑시오시 초기화 함수
function createInstance() {
  // axios를 요청 할때마다 같이 붙어서 나감.
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}

const instance = createInstance();

// 회원가입 API
function registerUser(userData) {
  return instance.post('signup', userData);
}

// 로그은 API
function loginUser(userData) {
  return instance.post('login', userData);
}

// 학습 노트 데이터를 조회하는 API
function fetchPosts() {
  return instance.get('posts');
}

// 학습 노트 데이터를 생성하는 API
function createPost(postData) {
  return instance.post('posts', postData);
}
export { registerUser, loginUser, fetchPosts, createPost };
