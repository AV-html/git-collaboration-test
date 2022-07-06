import React from 'react';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    tasks: Array<TaskType>
    title: string
}


export function Todolist({title, tasks}: PropsType) {
    // const {title, tasks} = props

    const tasksArray = tasks.map((t) => {
        return <li key={t.id}>
            <input type="checkbox" checked={t.isDone}/>
            <span>{t.title}</span>
        </li>
    })

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
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
}