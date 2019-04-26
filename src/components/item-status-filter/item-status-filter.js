import React from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component{

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active',label: 'Active'},
        {name: 'done', label: 'Done'}
    ];

    render() {
        let {filter} = this.props;

        let buttons = this.buttons.map(({name, label})=>{
            const isActive = filter === name;
            const secClass = isActive? 'btn-info' : 'btn-outline-secondary';
            return(
                <button type="button"
                        className={`btn ${secClass} `}
                        key={name}
                        onClick={()=>{
                            this.props.onFilterChange(name);
                        }}
                        >{label}</button>
            );
        });
            return (
                <div className="btn-group">
                    {buttons}
                </div>
            );
    }
}

