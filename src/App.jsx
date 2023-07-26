import React, { useState } from 'react';
import './App.css';
import {InputTodo} from './component/inputTodo';
import {IncompleteTodos} from './component/incompleteTodos';
import {CompleteTodos} from './component/completeTodos';

function App() {
  const[todoText,setTodoText] = useState([""]);
  const [incompleteTodos, setincompleteTodos] = useState([]);
  const [completeTodos,setCompleteTodos] = useState([]);
  const onChangeTodoText = (event) => { setTodoText(event.target.value)};
  const onClickadd = () =>{
    if(todoText === "") return;
    const newTodos =[...incompleteTodos, todoText];
    setincompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) =>{
    const newTodos = [...incompleteTodos];
    newTodos.splice(index,1);
    setincompleteTodos(newTodos);

  };

  const onclickComplete = (index) =>{
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index,1);
    const newcompleteTodos = [...completeTodos,incompleteTodos[index]];
    setincompleteTodos(newIncompleteTodos);
    setCompleteTodos(newcompleteTodos);

  };

  const onclickBack = (index) => {
    const newcompleteTodos = [...completeTodos];
    newcompleteTodos.splice(index,1);
    const newIncompleteTodos =[...incompleteTodos,completeTodos[index]];
    setCompleteTodos(newcompleteTodos);
    setincompleteTodos(newIncompleteTodos);

  };


  return (
    <>
   <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickadd} />
   <IncompleteTodos todos={incompleteTodos} onclickComplete={onclickComplete} onClickDelete={onClickDelete} />
   <CompleteTodos todos={completeTodos} onclickBack={onclickBack} />
    </>
   
  );
}

export default App;
