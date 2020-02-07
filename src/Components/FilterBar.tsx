import React from 'react'
import './FilterBar.css';

interface IFilterProps {
    name: string,
    handleFilter: (val: string) => void,
    icon: string
}

class FilterBar extends React.Component<IFilterProps> {
    readonly defaultFilterName: string = 'asc';
    handleChange = (e: any) => {
        this.props.handleFilter(e.target.value.toString());
    };

    render() {
        const {name, icon} = this.props;

        return (<>
            <input className='FilterInput'
                   value={name}
                   type="radio"
                   id={name}
                   name="todo-list"
                   onChange={this.handleChange}
                   defaultChecked={name === this.defaultFilterName}
            />
            <label className='FilterLabel'
                   htmlFor={name}>{icon}</label>
        </>);
    }
}

export default FilterBar;