export function deleteToDo(key){
    return {
        type: 'DELETE_TO_DO',
        payload: {
            id: key
        }
    };
}