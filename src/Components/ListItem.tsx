import React, {FC, useState, useEffect} from 'react'
import './ListItem.css';

interface MyProps {
    className: string,
    value: string,
    handleDelete: () => void
}

interface MyState {
    done: boolean
    countSecrets: number
}

const ListItem: FC<MyProps> = ({className, value, handleDelete}) => {
    const [state, setState] = useState<MyState>({
        done: false,
        countSecrets: 0
    });

    const listDoneClassName = state.done ? 'crossed' : '';

    // useEffect(() => {
    //     if (state.done) {
    //         setState(s => ({...s, countSecrets: s.countSecrets + 1}));
    //     }
    //     console.log('rerender');
    // }, [state]);

    const handleClick = () => {
        setState({
            ...state,
            done: !state.done
        });
    };

        return (<li className={`${className} ${listDoneClassName}`}>{value}
            <button className="check" onClick={handleClick}>✔</button>
            <button className="delete" onClick={handleDelete}>❌</button>
        </li>);
}

export default ListItem;