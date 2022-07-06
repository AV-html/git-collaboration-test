import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    const [tasks, setState] = useState([
        {id: 1, title: 'react', isDone: true},
        {id: 2, title: 'css', isDone: false},
        {id: 3, title: 'html', isDone: false},
        {id: 4, title: 'js', isDone: true},
    ])

    const deleteTaskHandler = (id: number) => {
        setState(tasks.filter(t => t.id !== id))
    }

    return (
        <div className="App">
            <Todolist
                tasks={tasks}
                title={'To do'}

                deleteTaskHandler={deleteTaskHandler}
            />
        </div>
    );
}

export default App;
