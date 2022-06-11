const initialState = {
    list: []
};

// retrieve saved list, if it exists
const savedToDoList = JSON.parse(localStorage.getItem('savedToDoList'));
if (savedToDoList && savedToDoList.list.length > 0) {
    initialState.list = savedToDoList.list;
}

// Manages the information (state) based on the information provided by actions

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TO_DO":
            // uses the current state with all object keys and values and add a new to "list"
            let addToList = {...state, list: [...state.list, action.payload]};

            // save the list
            localStorage.setItem('savedToDoList', JSON.stringify(addToList));

            // return the updated state
            return addToList;
            
        case "DELETE_TO_DO":
            // using filter, finds the object that matches the id and remove it from the list
            let deleteFromList = {...state, list: [...state.list.filter((list) => list.id !== action.payload.id)]};

            // save the list
            localStorage.setItem('savedToDoList', JSON.stringify(deleteFromList));

            // if the list is empty, delete the item from localStorage
            if (JSON.parse(localStorage.getItem('savedToDoList')).list.length === 0) {
                localStorage.removeItem('savedToDoList');
            }

            // return the updated state
            return deleteFromList;
            
        default:
            return state;
    }
};