import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  /* background-color: #b3cbd6; 페이지 배경색 */
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

const DiaryList = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DiaryCard = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;

  &:hover {
    background-color: #f3f3f3;
  }
`;

const DiaryTitle = styled.h3`
  margin: 0;
  color: #4a4a4a;
  font-size: 18px;
  font-weight: bold;
`;

const DiaryDate = styled.span`
  color: #a5a5a5;
  font-size: 12px;
  margin-top: 5px;
`;

const AddButton = styled.button`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
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

const Posts = ({ diaries }) => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
  
    useEffect(() => {
        const savedUsername = localStorage.getItem('username');
        setUsername(savedUsername);
    }, [navigate]);

    return (
      <Wrapper>
        <Header>{username}의 일기장</Header>
        <DiaryList>
          {diaries.map((diary) => (
            <DiaryCard key={diary.id} onClick={() => navigate(`/posts/${diary.id}`)}>
              <DiaryTitle>{diary.title}</DiaryTitle>
              <DiaryDate>{diary.date}</DiaryDate>
            </DiaryCard>
          ))}
        </DiaryList>
        <AddButton onClick={() => navigate('/posts/new')}>새로운 일기 쓰기</AddButton>
      </Wrapper>
    );
  };

export default Posts;
