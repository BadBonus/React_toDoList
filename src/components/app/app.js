import React from 'react';

import AppHeader from './../app-header/app-header';
import SearchPanel from './../search-panel/search-panel';
import TodoList from './../todo-list/todo-list';
import AddForm from './../add-form/add-form';
import ItemStatusFilter from './../item-status-filter/item-status-filter';

import './app.css';

export default class App extends React.Component{

    state ={
        todoData: [
            { label: 'Drink Coffee', done: false, important: false, id: 1, },
            { label: 'Make Awesome App', done: false, important: true, id: 2, },
            { label: 'Have a lunch', done: false, important: false, id: 3, }
        ],
        term:'',
        filter:'all'
    };

    deleteItem =(id) => {
        this.setState(({todoData}) => {
            let idx = todoData.findIndex((el) => el.id === id);

            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx+1);
            const newArray = [...before, ...after];

            return {
                todoData: newArray
            };
        });
    };
    test()
    {
        console.log(this.state);
    }

    addItem = (label) => {
        if (!label) return;
        let item = {
            label:label,
            done: false,
            important:false,
            id: this.state.todoData.length+1
        };
        this.setState(({todoData}) => {
            let newArray = [...todoData,item];
            return {todoData: newArray};
        });
    };

    finfElem(id)
    {
        let idx = this.state.todoData.findIndex((el) => el.id === id);
        return idx;
    }

    toggleProperty(arr, id, propName = ''){
        if(propName === '') return;
        let idx = this.finfElem(id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        const newArray = [...arr.slice(0, idx), newItem, ...arr.slice(idx+1)];
        return {todoData: newArray};
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return this.toggleProperty(todoData, id, 'important');
        });
};
    onToggleDone= (id) => {
        this.setState(({todoData}) => {
          return this.toggleProperty(todoData, id, 'done');
        });
    };

    search =(items, term)=>{
        if (term.length === '') return items;
        return items.filter((item)=>{
            return item.label.indexOf(term) > -1;
        });
    };

    changeTerm = (term) => {
        this.setState({term});
    };

    filter(items, filter){
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item)=>{
                    return !item.done
                });
            case 'done':
                return items.filter((item)=>{
                    return item.done
                });
            default:
                return items;
        }
    }

    onFilterChange=(filter)=>{
        this.setState({filter});
    };


    render(){
        let done = this.state.todoData.filter((el)=> el.done).length;
        let toDo = this.state.todoData.length - done;
        let {todoData, term, filter} = this.state;
        let visibleItems = this.filter(this.search(todoData, term), filter);
        return (

            <div className="todo-app">
                <AddForm addItem ={this.addItem}/>
                <AppHeader toDo={toDo} done={done} />
                <div className="top-panel d-flex">
                    <SearchPanel changeTerm={this.changeTerm}/>
                    <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
                </div>
                <TodoList todos={visibleItems}
                          onDeleted={this.deleteItem}
                          onToggleDone = {this.onToggleDone}
                          onToggleImportant = {this.onToggleImportant}
                />
            </div>
        );
    }
}
