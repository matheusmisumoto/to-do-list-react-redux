// Functions that triggers the reducer with the information provided

export function addToDo(text: string) {
    return {
        type: 'ADD_TO_DO',
        payload: {
            id: Math.random(),
            name: text
        }
    };
}