import React from 'react';

export default class AddForm extends React.Component{

    state = {
        text: ''
    };

    handleChange = (event) => {
        this.setState({text: event.target.value});
        //console.log(this.state.text); // хули читается предыдущее состояние state.text а не текущее?
    };
    submit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.text);
        this.setState({text:''});
    };
    render() {

        return(
            <form action="" className="item-add-form d-flex" onSubmit={this.submit} >
                <input type="text" id="addNote"
                       value={this.state.text}
                       onChange={this.handleChange}
                       placeholder ="add task"
                       className='pl-2'
                />
                <button  className="btn btn-primary ml-1" >new note</button>
            </form>
        );
    }

}
