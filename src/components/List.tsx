import React from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { deleteToDo } from '../lib/actions/deleteToDo';

interface ToDoItem {
    id: number;
    name: string;
}

export default function List({ ulClassName, toDoList, liClassName, delClassName, alertClassName }: { ulClassName: string, toDoList: ToDoItem[], liClassName: string, delClassName: string, alertClassName: string }) {
    const dispatch = useDispatch();

    return (
        toDoList && toDoList.length > 0 ? (
            <ul className={ulClassName}>
                {toDoList.map(({ id, name }) => (
                    <li key={id} className={liClassName}>
                        {name}
                        <Button onClick={() => dispatch(deleteToDo(id))} className={delClassName}>Delete</Button>
                    </li>
                ))}
            </ul>
        ) : (
            <div className={alertClassName} role="alert">
                There is no tasks to do. Add a new one or enjoy your day! :)
            </div>
        )
    );
}