import React, { useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [lastTodoId, setLastTodoId] = useState(0);

  const addTodo = (newContent) => {
    const id = lastTodoId + 1;
    setLastTodoId(id);

    const newTodo = {
      id,
      content: newContent,
      regDate: "2023-05-17 15:51:02",
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  const onBtnAddTodoClick = () => {
    addTodo("안녕");
  };

  return (
    <>
      <button onClick={onBtnAddTodoClick}>추가</button>
      <hr />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.id}
            {todo.regDate}
            {todo.content}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
