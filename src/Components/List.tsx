import React from 'react'
import {ListDataModel} from './dataModel'
import './List.css';
import ListItem from './ListItem';

type Props = {
    list: Array<ListDataModel>
    deleteItem: (id: number) => void
}

class List extends React.Component<Props> {
    state = {
        className: 'List-item'
    };

    render() {
        const {list} = this.props;
        return (<ul className="List">
                {list.map((el: any) => <ListItem key={el.id}
                                                 className={this.state.className}
                                                 value={el.value}
                                                 handleDelete={() => this.props.deleteItem(el.id as number)}
                />)}
            </ul>);
    }
}

export default List;