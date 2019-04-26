import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list.js';
import AppHeader from './components/AppHeader.js';
import InputComponent from './components/InputComponent.js';
import './index.css';

const App = () => {

    let todoData = [
        {label: 'drink Cofee', important: false, id: 1},
        {label: 'drink tea', important: true, id: 2},
        {label: 'drink beer', important: false, id: 3},
        {label: 'drink data', important: true, id: 4}
    ];

    return(
        <div>
            <AppHeader />
            <InputComponent />
            <TodoList  todos = {todoData}/>
        </div>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));
