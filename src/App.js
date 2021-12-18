import React, { useState } from 'react';
import './App.css';
import { ListTodo } from './components/TodoList/List.component';
import { FormToDo } from './components/TodoForm/Form.component';
import listTodo from './Data/listTodo.json'
function App() {
  const [todoList, setToDoList] = useState(listTodo)
  // const [color, setColor] = useState(false);

  function handleFormTodoSubmit(formValues) {
    const todo = {
      id: todoList.length + 1,
      title: formValues.title,
      complete: false
    }
    const newTodoList = [...todoList]
    newTodoList.push(todo)
    setToDoList(newTodoList)
  }

  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id)
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setToDoList(newTodoList)
  }

  function handleSuccessClick(todo) {
    setToDoList(
      todoList.map(item => {
        if (item.id === todo.id) {
          return {
            ...item,
            complete: !item.complete
          }
        } else
          return item
      })
    )
  }
  return (
    <div className="main">
      <div className="todo_app">
        <p className="title_app">To Do App </p>
        <FormToDo onSubmit={handleFormTodoSubmit} />
        <ListTodo
          todos={todoList}
          onToDoClick={handleTodoClick}
          onSuccessClick={handleSuccessClick}
        />
      </div>
    </div>
  );
}

export default App;
