import React from 'react'
import './FilterBar.css';

class FilterBar extends React.Component {

    render() {
        return (<div className="FilterButtons">
            <input className='FilterInput' type="radio" id="asc" name="todo-list" checked/>
            <label className='FilterLabel' htmlFor="asc">⇡</label>
            <input className='FilterInput' type="radio" id="desc" name="todo-list"/>
            <label className='FilterLabel' htmlFor="desc">⇣</label>
        </div>);
    }
}

export default FilterBar;