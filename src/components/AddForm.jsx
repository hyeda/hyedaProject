import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../redux/modules/todos";
import styled from "styled-components";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "") return;

    dispatch(
      addTodo({
        id: todos.length + 1,
        title,
      })
    );
    setTitle(""); // 입력 후 입력 필드 초기화
  };

  const onDeleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <StFormContainer>
      <form onSubmit={onSubmitHandler}>
        <label>Todos의 제목을 입력하세요</label>
        <StInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <StButton type="submit">추가하기</StButton>
      </form>
      <StTodoList>
        {todos.map((todo) => (
          <StTodoItem key={todo.id}>
            <span>{todo.title}</span>
            <StDeleteButton onClick={() => onDeleteHandler(todo.id)}>
              삭제
            </StDeleteButton>
          </StTodoItem>
          
        ))}
      </StTodoList>
    </StFormContainer>
  );
};

export default AddForm;

const StFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 30px;
`;

const StButton = styled.button`
  border: none;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;

const StTodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StTodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 8px;
`;

const StDeleteButton = styled.button`
  border: none;
  background-color: #ff6b6b;
  color: white;
  height: 25px;
  cursor: pointer;
  width: 60px;
  border-radius: 8px;
`;
