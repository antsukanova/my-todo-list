import React, {useState} from 'react'
import './AddItem.css';

interface IAddProps {
    onSubmit: (item: string) => void
}

const AddItem: React.FC<IAddProps> = ({onSubmit}) => {

    const [input, setInput] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const onSubmitItem = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        if (input) {
            onSubmit(input);
            setInput('');
            setError(false)
        } else {
            setError(true)
        }
    };

    return (<div className="Buttons">
        <input type='text' placeholder='Type new todo...' value={input} onChange={handleChange}/>
        <button onClick={onSubmitItem}>Add</button>
        {error && <div className='Alert'>
            Set name for todo item
        </div>}
    </div>)
};

export default AddItem;