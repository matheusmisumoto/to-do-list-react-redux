import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import Input from '../../components/Input';
import List from '../../components/List';
import { addToDo } from '../../store/actions/toDo';

class App extends Component {
    state = {
        input: '',
        disabled: true,
    };

    submit = () => {
        // set the function (action) from connect
        const { addToDo } = this.props;
        // set the input value from state
        const { input } = this.state;
        
        // calls the action to add to the list
        // with the information from state
        addToDo(input);

        // then, reset the state and therefore the input text
        // as it adds the new item, disable the button to prevent submit empty input as new tasks.
        this.setState({input: '', disabled: true})
    };

    handleOnChange = (event) => {
        // set the value of the item to be added in the state, as it types
        // if the input is empty, disable the button to disallow add empty tasks to the list
        
        if(event.target.value.length !== 0){
            this.setState({input: event.target.value, disabled: false});
        } else {
            this.setState({input: event.target.value, disabled: true});
        }
    };

    render(){
        const { input, disabled } = this.state;
        const { toDoList } = this.props;
        return(
            <>
                <h1 className='my-5'>Hello,<br />this is my to do list...</h1>
                <List
                    toDoList={toDoList}
                    ulClassName="list-group mt-5 mb-3"
                    liClassName="list-group-item d-flex justify-content-between align-items-center"
                    delClassName="btn btn-danger"
                    alertClassName="alert alert-dark"
                />
                <h2 className='mt-5 mb-3'>New Task</h2>
                {this.state.disabled}
                <Input onChange={(event) => this.handleOnChange(event)} value={input} className="form-control" />
                <Button onClick={() => this.submit()} className="btn btn-primary container my-3" disabled={disabled}>Add to the list</Button>
                <footer className='my-5 text-center'>
                    Developed by <a href="https://matheusmisumoto.dev/">Matheus Misumoto</a> in January 2022. Powered by <a href="https://reactjs.org/" target="_blank" rel='noreferrer'>ReactJS</a>.
                </footer>
            </>
        )
    }
}

// mapsStateToProps: the information you want to retrieve
const mapsStateToProps = (state) => ({
    toDoList: state.toDo.list
})

// Connect to the store
// addToDo here gets the import to the be used inside Class
export default connect(mapsStateToProps, { addToDo })(App);