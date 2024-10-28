import { Action } from "@reduxjs/toolkit";

interface AddToDoAction extends Action {
    type: "ADD_TO_DO";
    payload: ToDoItem;
}

interface DeleteToDoAction extends Action {
    type: "DELETE_TO_DO";
    payload: { id: number };
}

type ToDoAction = AddToDoAction | DeleteToDoAction;

interface ToDoItem {
    id: number;
    name: string;
}

interface State {
    list: ToDoItem[];
}

const initialState: State = {
    list: []
};

export default function reducer(state = initialState, action: ToDoAction) {
    switch (action.type) {
        case "ADD_TO_DO":
            // uses the current state with all object keys and values and add a new to "list"
            const addToList = {...state, list: [...state.list, action.payload]};

            // return the updated state
            return addToList;
            
        case "DELETE_TO_DO":
            // using filter, finds the object that matches the id and remove it from the list
            const deleteFromList = {...state, list: [...state.list.filter((list) => list.id !== action.payload.id)]};

            // return the updated state
            return deleteFromList;
            
        default:
            return state;
    }
};