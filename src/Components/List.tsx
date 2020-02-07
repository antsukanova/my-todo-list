import React from 'react'
import {ListDataModel} from './dataModel'
import './List.css';
import ListItem from './ListItem';

type Props = {
    list: Array<ListDataModel>
    deleteItem: (id: number) => void
}

const List: React.FC<Props> = ({list, deleteItem}) => {
    const className = 'List-item';

    return (<ul className="List">
        {list.map((el: any) => <ListItem key={el.id}
                                         className={className}
                                         value={el.value}
                                         handleDelete={() => deleteItem(el.id as number)}
        />)}
    </ul>);
};

export default List;