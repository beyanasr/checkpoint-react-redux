import React from 'react'
import {Form,Button} from 'react-bootstrap';
import './AddTask.css'
import {useState}from 'react';
import {useDispatch} from 'react-redux'
import {add}from '../../reduxFiles/action/action'

function AddTask() {
    const [inputText, setInputText] = useState("");
    const dispatch = useDispatch()

const handleChange = (e) => {
    e.preventDefault();
    dispatch(add({ id: Math.random(), text: inputText, isDone: false }));
    setInputText("");

    } 

return (
    <Form className="add-task">
    <Form.Control
        type="text"
        placeholder="Enter task title ..."
        className="input-task"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
    />
    <button variant="light" onClick={handleChange}>
        Add
    </button>
    </Form>
);
}

export default AddTask

