'use client'

import Button from "../components/Button";
import Input from "../components/Input";
import List from "../components/List";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../lib/actions/addToDo";
import { useAppSelector } from "../lib/hooks";

export default function Page(){

    const [formOptions, setFormOptions] = useState({
        input: '',
        disabled: true,
    });
    const [isClient, setIsClient] = useState(false);

    const dispatch = useDispatch();
    
    useEffect(() => {
        setIsClient(true);
    }, []);

    const submit = () => {
        // calls the action to add to the list
        // with the information from state
        dispatch(addToDo(formOptions.input));

        // then, reset the state and therefore the input text
        // as it adds the new item, disable the button to prevent submit empty input as new tasks.
        setFormOptions({input: '', disabled: true});
    };

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        // set the value of the item to be added in the state, as it types
        // if the input is empty, disable the button to disallow add empty tasks to the list
        
        if(event.target.value.length !== 0){
            setFormOptions({input: event.target.value, disabled: false});
        } else {
            setFormOptions({input: event.target.value, disabled: true});
        }
    };
    
    const list = useAppSelector((state) => state.toDo.list);

    if (!isClient) {
        return null;
    }

    return(
        <>
            <h1 className='my-5'>Hello,<br />this is my to do list...</h1>
            <List
                toDoList={list}
                ulClassName="list-group mt-5 mb-3"
                liClassName="list-group-item d-flex justify-content-between align-items-center"
                delClassName="btn btn-danger"
                alertClassName="alert alert-dark"
            />
            <h2 className='mt-5 mb-3'>New Task</h2>
            <Input onChange={(event) => handleOnChange(event)} value={formOptions.input} className="form-control" />
            <Button onClick={() => submit()} className="btn btn-primary container my-3 p-2" disabled={formOptions.disabled}>Add to the list</Button>
            <footer className='my-5 text-center'>
                Developed by <a href="https://matheusmisumoto.dev/">Matheus Misumoto</a>. Powered by <a href="https://nextjs.org/" target="_blank" rel='noreferrer'>Next.js</a>.
            </footer>
        </>
    )
}