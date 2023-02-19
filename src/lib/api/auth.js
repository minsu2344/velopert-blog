import client from "./client";

// 로그인
export function login({username, password}) {
  return client.post('/api/auth/login', {username, password})
}

// 회원가입
export function register({username, password}) {
  return client.post('/api/auth/register', {username, password});
}

// 로그인 상태 확인
export function check() {
  return client.get('/api/auth/check');
}