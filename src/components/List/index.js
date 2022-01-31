import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button';
import { deleteToDo } from '../../store/actions/deleteToDo';

const List = ({ulClassName, toDoList, liClassName, deleteToDo, delClassName, alertClassName}) => toDoList.length > 0 ? (
    <ul className={ulClassName}>
        {toDoList.map(({id, name}) => (
            <li key={id} className={liClassName}>
                {name}
                <Button onClick={() => deleteToDo(id)} className={delClassName}>Delete</Button>
            </li>
        ))}
    </ul>
) : (
    <div class={alertClassName} role="alert">
        There is no tasks to do. Add a new one or enjoy your day! :)
    </div>
)

// Passes the action function as a prop 
// (same as the second arg of connect)

// const mapDispatchToProps = dispatch => ({
//     deleteToDo: (key) => dispatch(deleteToDo(key))
// })

// Connect to the store
export default connect(null, { deleteToDo })(List);