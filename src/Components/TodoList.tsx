import React, {useState} from 'react'
import {FilterDataModel, ListDataModel} from './dataModel'
import List from './List';
import AddItem from './AddItem';
import FilterBar from './FilterBar';
import './TodoList.css';

const TodoList: React.FC = () => {

    const [list, setList] = useState<Array<ListDataModel>>([{id: 1, value: 'aaaaa'}, {id: 2, value: 'sssss'}]);
    const [filterName] = useState<Array<FilterDataModel>>([{value: 'desc', icon: '⇣'}, {value: 'asc', icon: '⇡'}]);

    const addItem = (item: string) => {
        let newKey = 0;
        let firstELem = 0;
        let lastElem = 0;
        if (list.length) {
            firstELem = list[0].id;
            lastElem = list[list.length - 1].id;
        }
        if (list.length > 0) {
            newKey = lastElem > firstELem ? lastElem + 1 : firstELem + 1;
        }
        setList([...list, {id: newKey, value: item}]);
    };

    const filterItems = (order: string) => {
        if (order === 'desc') {
            const newArr = list.sort((a, b) => b.id - a.id);
            setList([...newArr]);
        } else if (order === 'asc') {
            const newArr = list.sort((a, b) => a.id - b.id);
            setList([...newArr]);
        }
    };

    const deleteItem = (id: number) => {
        setList(list.filter(el => el.id !== id));
    };

    return (<div className="App-list">
        <div className="FilterButtons">
            {filterName.map(el => <FilterBar key={el.value}
                                             name={el.value}
                                             icon={el.icon}
                                             handleFilter={() => filterItems(el.value)}
            />)}
        </div>
        <List list={list} deleteItem={deleteItem}/>
        <AddItem onSubmit={addItem}/>
    </div>);
};

export default TodoList;