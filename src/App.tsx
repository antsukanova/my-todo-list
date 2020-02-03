import React from 'react';
import TodoList from './Components/TodoList';
import './App.css';

const App: React.FC = () => {
    return (<div className="App">
        <header className="App-header">
            ToDo list:
        </header>
        <TodoList/>
    </div>);
};

export default App;
