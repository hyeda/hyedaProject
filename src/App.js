import React, {useState} from 'react';
import './App.css'; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import CustomButton from './components/Button';
import User from './components/User';


const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 26, name: '혜다' },
    { id: 2, age: 25, name: '지인' },
    { id: 3, age: 34, name: '범규' },
    { id: 4, age: 56, name: '주원' }
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState('');

  const addUser = () => {
    const newUser = {
      id: users.length + 1,
      age, // age: age 이렇게 해도 됨.
      name,
    };

    setUsers([...users, newUser]);
  };

  const deleteUser = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };

  return (
    <div>
      <input 
        value={name} 
        placeholder='이름을 입력해주세요'
        onChange={(event) => setName(event.target.value)}>
      </input>
      <input
        value={age} 
        placeholder='나이를 입력해주세요'
        onChange={(event) => setAge(event.target.value)}>
      </input>
      {users.map((user) => {
        if (user.age <= 32) {
          return <User user={user} key={user.id} handleDelete={() => deleteUser(user.id)}/>;
        } else {
          return null;
        }
      })}
      <CustomButton color={"green"} onClick={addUser}>
        추가하기
      </CustomButton>
    </div>
  );
};

export default App;