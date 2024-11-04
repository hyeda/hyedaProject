import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { removeUsername } from 'store/localStorage';


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3d8c58;
`;

const Box = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  background: white;
  box-shadow: 0px 25px 100px -60px rgba(0, 0, 0, 1);
  padding: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: center;
  width: 100%;
`;

const PostList = styled.div`
  flex: 1;
  width: 100%;
  overflow-y: auto;
  margin: 20px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoutButton  = styled.button`
  width: 100px;
  height: 40px;
  background-color: #3d8c58;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #2e6a45;
  }
`;

// const HeaderStyles = {
//   width: '100%',
//   background: 'black',
//   height: '50px',
//   display: 'flex',
//   alignItems: 'center',
//   paddingLeft: '20px',
//   color: 'white',
//   fontWeight: '600',
// };

// const FooterStyles = {
//   width: '100%',
//   height: '50px',
//   display: 'flex',
//   background: 'black',
//   color: 'white',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontSize: '12px',
// };

// const layoutStyles = {
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   minHeight: '90vh',
// };

// function Header() {
//   return (
//     <div style={{ ...HeaderStyles }}>
//       <span>Sparta Coding Club - Let's learn React</span>
//     </div>
//   );
// }

// function Footer() {
//   return (
//     <div style={{ ...FooterStyles }}>
//       <span>copyright @SCC</span>
//     </div>
//   );
// }


function Layout({ children }) {
  const navigate = useNavigate();
  
  const handleCover = () => {
    removeUsername(); // username 삭제
    navigate('/'); // 메인 페이지로 이동
  };

  return (
    <div>
      <Wrapper>
        <Box>
          <Title>🌰 Dotory Diary 🌰</Title>
          <PostList>
            {children}
          </PostList>
          <LogoutButton onClick={handleCover}>일기장 덮기</LogoutButton >
        </Box>
      </Wrapper>
    </div>
  );
}

export default Layout;
