import React from 'react'
import {FilterDataModel, ListDataModel} from './dataModel'
import List from './List';
import AddItem from './AddItem';
import FilterBar from './FilterBar';
import './TodoList.css';

type State = {
    list: Array<ListDataModel>, filterName: Array<FilterDataModel>
}

class TodoList extends React.Component {
    state: State = {
        list: [{id: 1, value: 'aaaaa'}, {id: 2, value: 'sssss'}], //[] ???
        filterName: [{value: 'desc', icon: '⇣'}, {value: 'asc', icon: '⇡'}]
    };

    addItem = (item: String) => {
        this.setState(() => {
            let newKey = 0;
            if (this.state.list.length > 0) {
                newKey = this.state.list[this.state.list.length - 1].id + 1;
            }
            const list = [...this.state.list, {id: newKey, value: item}];
            return {
                list
            };
        });
    };

    FilterItems = (order: string) => {
        //if nothing => then desc
        if (order === 'desc') {
            this.setState(state => {
                const sortedArray = this.state.list.sort((a, b) => b.id - a.id);
                return {sortedArray}
            })
        } else if (order === 'asc') {
            this.setState(state => {
                const sortedArray = this.state.list.sort((a, b) => a.id - b.id);
                return {sortedArray}
            })
        }
    };

    deleteItem = (id: number) => {
        this.setState(() => {
            const list = this.state.list.filter(el => el.id !== id);
            return {
                list
            };
        });
    };

    render() {
        const {list, filterName} = this.state;

        return (<div className="App-list">
            <div className="FilterButtons">
                {filterName.map(el => <FilterBar key={el.value}
                                                 name={el.value}
                                                 icon={el.icon}
                                                 handleFilter={() => this.FilterItems(el.value)}
                />)}
            </div>
            <List list={list} deleteItem={this.deleteItem}/>
            <AddItem onSubmit={this.addItem}/>
        </div>);
    }
}

export default TodoList;