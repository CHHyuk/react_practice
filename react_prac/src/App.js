import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  const onClick = () => {
    // const netTodos = [...todos, todos.Length + 1];
    // setTodos(newTodos);
  
    addTodo(todos.length + 1);
  }



  return (
    <>
      <button onClick={onClick}>{JSON.stringify(todos)}</button>
    </>
  );
}

export default App;
