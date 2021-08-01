import React, {FC, useState} from 'react'
import './ListItem.css';

interface MyProps {
    className: string,
    value: string,
    handleDelete: () => void
}

interface MyState {
    done: boolean
}

const ListItem: FC<MyProps> = ({className, value, handleDelete}) => {
    const [state, setState] = useState<MyState>({
        done: false
    });

    const handleClick = () => {
        setState({
            ...state,
            done: !state.done
        });
    };

        return (<li className={`${className} ${state.done ? 'crossed' : ''}`}>{value}
            <button className="check" onClick={handleClick}>✔</button>
            <button className="delete" onClick={handleDelete}>❌</button>
        </li>);
}

export default ListItem;