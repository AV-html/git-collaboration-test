import React from 'react';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    tasks: Array<TaskType>
    title: string

    deleteTaskHandler: (id: number) => void
}


export function Todolist({title, tasks, deleteTaskHandler}: PropsType) {
    // const {title, tasks} = props

    const tasksArray = tasks.map((t) => {
        const onDeleteHandler = () => {
            deleteTaskHandler(t.id)
        };

        return <li key={t.id}>
            <input type="checkbox" checked={t.isDone}/>
            <span>{t.title}</span>
            <button onClick={onDeleteHandler}>X</button>
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