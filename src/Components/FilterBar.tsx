import React from 'react'
import './FilterBar.css';

interface IFilterProps {
    name: string,
    icon: string,
    handleFilter: (val: string) => void
}

const FilterBar: React.FC<IFilterProps> = ({name, icon, handleFilter}) => {
    const defaultFilterName = 'asc';

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        handleFilter(e.target.value.toString());
    }

    return (<>
        <input className='FilterInput'
               value={name}
               type="radio"
               id={name}
               name="todo-list"
               onChange={handleChange}
               defaultChecked={name === defaultFilterName}
        />
        <label className='FilterLabel'
               htmlFor={name}>{icon}</label>
    </>);
};

export default FilterBar;