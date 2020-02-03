import React from 'react'
import './AddItem.css';

interface IAddProps {
    onSubmit: (item: string) => void
}

class AddItem extends React.Component<IAddProps> {
    state = {
        input: '', error: null
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            input: e.target.value
        });
    };

    onSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        if (this.state.input) {
            this.props.onSubmit(this.state.input);

            this.setState({
                input: '', error: null
            });
        } else {
            this.setState({
                error: true
            });
        }
    };

    render() {
        return (<div className="Buttons">
            <input type='text' placeholder='Type new todo...' value={this.state.input} onChange={this.handleChange}/>
            <button onClick={this.onSubmit}>Add</button>
            {this.state.error && <div className='Alert'>
                Set name for todo item
            </div>}
        </div>)
    }
}

export default AddItem;