import React from 'react'
import './List.component.css'
export const ListTodo = ({ todos, onToDoClick, onSuccessClick, color }) => {
    function handleTodoClick(todo) {
        if (!onToDoClick) return;
        onToDoClick(todo)
    }
    function handleComplete(todo) {
        if (!todo) return;
        onSuccessClick(todo)
    }

    return (
        <div className="todo_list">
            <br />
            {todos.map((todo) => (
                <div key={todo.id} className="todo_item" style={{ backgroundColor: todo.complete ? 'green' : 'white' }}>
                    <p className="title_todo"
                        onClick={() => handleComplete(todo)}
                    > {todo.title}
                        {todo.complete ? ' (Completed)' : ''}
                    </p>
                    <button type="button" onClick={() => onToDoClick(todo)} className="button_trash"><i class="far fa-trash-alt"></i></button>
                </div>
            ))}
            <br />
        </div>
    )
}
