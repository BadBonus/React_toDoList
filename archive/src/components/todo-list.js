import React from "react";
import TodoListItem from './todo-list-item';
import './todo-list.css';

const TodoList = ({todos}) => {

    let elements = todos.map((item) => {
       return(<li key={item.id} className='list-group-item p-1 myItem'><TodoListItem {... item} /></li>)
    });

    return(
        <ul className="list-group">
            {elements}
        </ul>
    );
};

export default TodoList;
