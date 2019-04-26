import React from 'react';

import './search-panel.css';

export default class SearchPanel extends React.Component
{
  state ={
    filterText: ''
  };
  handleChange = (event) => {
    let filterText = event.target.value;
    this.setState({filterText});
    this.props.changeTerm(filterText);
  };
  render()
  {
    return (
        <input type="text"
               className="form-control search-input"
               placeholder="type to search"
               value={this.state.filterText}
               onChange={this.handleChange}
        />
    );
  }
}


