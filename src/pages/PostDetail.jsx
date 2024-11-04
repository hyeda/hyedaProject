import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

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

const DiaryContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DiaryTitle = styled.h2`
  color: #4a4a4a;
  font-size: 22px;
  margin: 0;
`;

const DiaryDate = styled.span`
  color: #a5a5a5;
  font-size: 14px;
`;

const DiaryContent = styled.p`
  color: #4a4a4a;
  font-size: 16px;
  line-height: 1.5;
  white-space: pre-wrap;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ActionButton = styled.button`
  width: 48%;
  padding: 10px;
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

  &:nth-child(2) {
    background-color: #d9534f;

    &:hover {
      background-color: #c9302c;
    }
  }
`;

const PostDetail = ({ diaries, setDiaries }) => {
    const { postId } = useParams(); // postId로 변경
    const navigate = useNavigate();
    const diary = diaries.find((d) => d.id === parseInt(postId, 10)); // postId를 사용해 일기 검색
  
    if (!diary) return <Wrapper>이 곳엔 일기가 적혀있지 않습니다.</Wrapper>;
  
    const handleDelete = () => {
      setDiaries((prevDiaries) => prevDiaries.filter((d) => d.id !== diary.id));
      navigate('/posts');
    };
  
    return (
      <Wrapper>
        <Header>일기장 구경하기</Header>
        <DiaryContainer>
          <DiaryTitle>{diary.title}</DiaryTitle>
          <DiaryDate>{diary.date}</DiaryDate>
          <DiaryContent>{diary.content}</DiaryContent>
          <ButtonContainer>
            <ActionButton onClick={() => navigate(`/posts/edit/${diary.id}`)}>수정하기</ActionButton>
            <ActionButton onClick={handleDelete}>삭제하기</ActionButton>
          </ButtonContainer>
        </DiaryContainer>
      </Wrapper>
    );
  };
  
  export default PostDetail;
