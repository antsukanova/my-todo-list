import React from 'react'
import './ListItem.css';

interface MyProps {
    className: string,
    value: string,
    key: number, //!!!!!!!
    handleDelete: (key: number) => void
}

interface MyState {
    done: boolean
}

class ListItem extends React.Component<MyProps, MyState> {
    state: MyState = {
        done: false
    };

    handleClick = () => {
        this.setState(prevState => ({
            done: !prevState.done
        }));
    };

    render() {
        return (<li className={`${this.props.className} ${this.state.done ? 'crossed' : ''}`}>{this.props.value}
            <button className="check" onClick={this.handleClick}>✔</button>
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <button className="delete" onClick={() => this.props.handleDelete(this.props.key)}>❌</button>
        </li>);
    }
}

export default ListItem;