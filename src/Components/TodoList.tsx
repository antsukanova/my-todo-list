import React from 'react'
import {ListDataModel} from './dataModel'
import List from './List';
import AddItem from './AddItem';
import FilterItem from './FilterBar';
import './TodoList.css';

type State = {
    list: Array<ListDataModel>, filterName: Array<string>
}

class TodoList extends React.Component {
    state: State = {
        list: [{id: 1, value: 'aaaaa'}, {id: 2, value: 'sssss'}], //[]
        filterName: ['desc', 'asc']
    };

    // listIsEmpty = (list: Array<ListDataModel> | []) => {
    //     return this.state.list.length > 0
    // };

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
            this.state.list.sort((a, b) => b.id - a.id);
            console.log(this.state.list)
        } else if (order === 'asc') {
            this.state.list.sort((a, b) => a.id - b.id);
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
                {filterName.map(el => <FilterItem key={el}
                                                  name={el}
                                                  handleFilter={() => this.FilterItems(el)}
                />)}
            </div>
            <List list={list} deleteItem={this.deleteItem}/>
            <AddItem onSubmit={this.addItem}/>
        </div>);
    }
}

export default TodoList;