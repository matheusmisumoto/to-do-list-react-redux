export function deleteToDo(key: number){
    return {
        type: 'DELETE_TO_DO',
        payload: {
            id: key
        }
    };
}