import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { saveUsername, loadUsername } from 'store/localStorage';



const LoginBox = styled.div`
  width: 300px;
  padding: 40px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Logo = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box; /* padding과 border를 포함하여 width가 계산됨 */
  &::placeholder {
    color: #aaa;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #A67553; /* 버튼 배경색 */
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #8c5c3f;
  }
`;

const Links = styled.div`
  margin-top: 20px;
  font-size: 12px;
  color: #333;
  display: flex;
  justify-content: space-around;
`;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = () => {
    const storedUsername = loadUsername();

    if (storedUsername && username !== storedUsername) {
      alert(`일기장 주인이 아닙니다 "${storedUsername}"로 로그인해주세요.`);
      return;
    }

    if (password.length !== 4) {
      alert("비밀번호는 4자리 입니다");
      return;
    }

    if (!storedUsername) {
      saveUsername(username); // 새로운 username 저장
    }

    navigate('/posts');

  };
  return (
      <LoginBox>
        <Logo>🐿️</Logo> 
        <Title>도토리 일기장</Title>
        <Input
        type="text"
        placeholder="일기장 이름 (한글)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <Input 
        type="password" 
        placeholder="좌물쇠 번호 (4자리)" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        maxLength={4}
        />
        <LoginButton onClick={handleLogin}>좌물쇠 풀기🔓</LoginButton>
        <Links>
          <span>일기장 찾기</span>
          <span>|</span>
          <span>좌물쇠 번호 재설정</span>
        </Links>
      </LoginBox>
  );
}

export default Login;
