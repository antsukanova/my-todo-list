import React, {FC, useState} from 'react'
import './AddItem.css';

interface IAddProps {
    onSubmit: (item: string) => void
}

const AddItem: FC<IAddProps> = ({onSubmit}) => {
    const [state, setState] = useState({
        input: '', error: null
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state,
            input: e.target.value
        });
    };

    const onClick = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        if (state.input) {
            onSubmit(state.input);

            setState({
                input: '', error: null
            });
        } else {
            // @ts-ignore
            setState({...state,
                error: true
            });
        }
    };

        return (<div className="Buttons">
            <input type='text' placeholder='Type new todo...' value={state.input} onChange={handleChange}/>
            <button onClick={onClick}>Add</button>
            {state.error && <div className='Alert'>
                Set name for todo item
            </div>}
        </div>);
}

export default AddItem;