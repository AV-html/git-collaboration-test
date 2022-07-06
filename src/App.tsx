import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

export type FilterType = 'all' | 'active' | 'completed'

function App() {
    const [filter, setFilter] = useState<FilterType>('all')
    const tasks: Array<TaskType> = [
        {id: 1, title: 'react', isDone: true},
        {id: 2, title: 'css', isDone: false},
        {id: 3, title: 'html', isDone: false},
        {id: 4, title: 'js', isDone: true},
    ]

    const changeFilter = (filter: FilterType) => {
        setFilter(filter)
    }

    let tasksList = tasks
    if (filter === 'active') {
        tasksList = tasksList.filter((t) => !t.isDone)
    } else if (filter === 'completed') {
        tasksList = tasksList.filter((t) => t.isDone)
    }


  return (
    <div className="App">
      <Todolist
          title={'To do'}
          tasks={tasksList}
          changeFilter={changeFilter}
          filter={filter}
      />
    </div>
  );
}

export default App;
