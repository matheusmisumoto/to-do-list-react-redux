// Functions that triggers the reducer with the information provided

export function addToDo(text) {
    return {
        type: 'ADD_TO_DO',
        payload: {
            id: Math.random(),
            name: text
        }
    };
}