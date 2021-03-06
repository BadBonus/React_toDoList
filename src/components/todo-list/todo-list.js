import React from 'react';

import TodoListItem from './../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({ todos,
                    onDeleted,
                    onToggleImportant,
                    onToggleDone }) => {

  const elements = todos.map((item) => {
    const { id, vision, ...itemProps } = item;

    return (

      <li key={id} aria-disabled={false} className="list-group-item">
        <TodoListItem {...itemProps }
                      onDeleted={()=> onDeleted(id)}
                      onToggleDone = {()=> onToggleDone(id)}
                      onToggleImportant = {()=> onToggleImportant(id)}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
