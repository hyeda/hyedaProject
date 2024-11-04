import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;

const Header = styled.header`
  width: 100%;
  max-width: 400px;
  text-align: center;
  margin-bottom: 20px;
  color: #4a4a4a;
  font-size: 24px;
  font-weight: bold;
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
  &::placeholder {
    color: #aaa;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  resize: vertical;
  min-height: 150px;
  box-sizing: border-box;
  &::placeholder {
    color: #aaa;
  }
`;

const SaveButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #a67553;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #8c5c3f;
  }
`;

const PostForm = ({ diaries, setDiaries }) => {
  const { postId } = useParams(); // URL 파라미터로 postId 가져오기
  const navigate = useNavigate();
  const isEditMode = Boolean(postId); // postId가 있으면 수정 모드

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  

  useEffect(() => {
    if (isEditMode && diaries) {
      const diaryToEdit = diaries.find((diary) => diary.id === parseInt(postId, 10));
      if (diaryToEdit) {
        setTitle(diaryToEdit.title);
        setContent(diaryToEdit.content);
      }
    }
  }, [isEditMode, postId, diaries]);

  const handleSave = () => {
    if (title.length < 5) {
      alert("오늘의 한 문장이 너무 짧습니다 (5글자 이상)");
      return;
    } 

    if (isEditMode) {
      // 수정 모드: 기존 일기 수정
      
      setDiaries((prevDiaries) =>
        prevDiaries.map((diary) =>
          diary.id === parseInt(postId, 10) ? { ...diary, title, content } : diary
        )
      );
    } else {
      // 작성 모드: 새 일기 추가
      const newDiary = {
        id: Date.now(),
        title,
        content,
        date: new Date().toISOString().split('T')[0],
      };
      setDiaries((prevDiaries) => [...prevDiaries, newDiary]);
    }

    navigate('/posts');
  };

  return (
    <Wrapper>
      <Header>{isEditMode ? "일기 수정하기" : "오늘의 일기 쓰는 중"}</Header>
      <Form>
        <Input
          type="text"
          placeholder="오늘을 한 문장으로 나타내 보세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextArea
          placeholder="오늘 있었던 즐거운 일, 속상한 일들을 적어보세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <SaveButton onClick={handleSave}>
          {isEditMode ? "수정 끝!" : "저장하기"}
        </SaveButton>
      </Form>
    </Wrapper>
  );
};

export default PostForm;
