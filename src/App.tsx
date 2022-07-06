import React from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

function App() {

    const tasks: Array<TaskType> = [
        {id: 1, title: 'react', isDone: true},
        {id: 2, title: 'css', isDone: false},
        {id: 3, title: 'html', isDone: false},
        {id: 4, title: 'js', isDone: true},
    ]

  return (
    <div className="App">
      <Todolist tasks={tasks} title={'To do'}/>
    </div>
  );
}

export default App;
