import React from 'react'
import './FilterBar.css';

interface IFilterProps {
    name: string,
    handleFilter: (val: string) => void
}

const FilterBar = (props: IFilterProps) => {

    const handleChange = (e: any) => {
        props.handleFilter(e.target.value.toString())
    };

    return (<>
        <input className='FilterInput'
               value={props.name}
               type="radio"
               id={props.name}
               name="todo-list"
               onChange={handleChange}/>
        <label className='FilterLabel'
               htmlFor={props.name}>⇣</label>
    </>);
};

export default FilterBar;