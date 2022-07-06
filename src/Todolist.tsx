import React from 'react';
import {FilterType} from './App';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    filter: FilterType

    tasks: Array<TaskType>

    changeFilter: (filter: FilterType) => void


}


export function Todolist({title, filter, tasks, changeFilter}: PropsType) {
    // const {title, tasks} = props

    const tasksArray = tasks.map((t) => {
        return <li key={t.id}>
            <input type="checkbox" checked={t.isDone}/>
            <span>{t.title}</span>
        </li>
    })

    const onAllFilterHandler = () => {
        changeFilter('all')
    };

    const onActiveFilterHandler = () => {
        changeFilter('active')
    };

    const onCompletedFilterHandler = () => {
        changeFilter('completed')
    };

    return (
        <div>
            <h3>
                {title}
            </h3>
            <div>
                <input type="text"/>
                <button>Add</button>
            </div>
            <ul>
                {tasksArray}
            </ul>
            <div>
                <button style={filter === 'all' ? {background: 'lightgreen'} : {}} onClick={onAllFilterHandler}>All</button>
                <button style={filter === 'active' ? {background: 'lightgreen'} : {}} onClick={onActiveFilterHandler}>Active</button>
                <button style={filter === 'completed' ? {background: 'lightgreen'} : {}} onClick={onCompletedFilterHandler}>Completed</button>
            </div>
        </div>
    );
}