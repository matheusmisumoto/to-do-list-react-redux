const initialState = {
    list: []
};

// Manages the information (state) based on the information provided by actions

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TO_DO":
            // uses the current state with all object keys and values and add a new to "list"
            return {...state, list: [...state.list, action.payload]};

        case "DELETE_TO_DO":
            // using filter, finds the object that matches the id and remove it from the list
            return {...state, list: [...state.list.filter((list) => list.id !== action.payload.id)]};
            
        default:
            return state;
    }
};