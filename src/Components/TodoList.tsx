import React from 'react'
import ListItem from './ListItem';
import AddItem from './AddItem';
import FilterItem from './FilterBar';
import './TodoList.css';

class TodoList extends React.Component {
    state = {
        list: [{id: 1, value: 'aaaaa'}, {id: 2, value: 'sssss'}], className: 'List-item'
    };

    addItem = (item: String) => {
        this.setState(() => {
            let newKey;
            if (this.state.list.length > 0) {
                newKey = this.state.list[this.state.list.length - 1].id + 1;
            } else {
                newKey = 0
            }
            const list = [...this.state.list, {id: newKey, value: item}];
            return {
                list
            };
        });
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
        return (<div className="App-list">
            <FilterItem/>
            <ul className="List">
                {this.state.list.map(el => <ListItem key={el.id}
                                                     className={this.state.className}
                                                     value={el.value}
                                                     handleDelete={() => this.deleteItem(el.id)}
                />)}
            </ul>
            <AddItem onSubmit={this.addItem}/>
        </div>);
    }
}

export default TodoList;