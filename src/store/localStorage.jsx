// utils/localStorageUtils.js

// 일기 데이터 저장
export const saveDiaries = (diaries) => {
    localStorage.setItem('diaries', JSON.stringify(diaries));
  };
  
  // 일기 데이터 로드
  export const loadDiaries = () => {
    const diaries = localStorage.getItem('diaries');
    return diaries ? JSON.parse(diaries) : [];
  };
  
  // username 저장
  export const saveUsername = (username) => {
    localStorage.setItem('username', username);
  };
  
  // username 로드
  export const loadUsername = () => {
    return localStorage.getItem('username');
  };
  
  // 로그아웃 시 username 제거
  export const removeUsername = () => {
    localStorage.removeItem('username');
  };
  