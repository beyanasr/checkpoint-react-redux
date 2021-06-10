import React from "react";
import { Button } from "react-bootstrap";
import "./Task.css";
import { useDispatch } from "react-redux";
import { deleteT, done } from "../../reduxFiles/action/action";
import Edit from "../Edit/Edit";

function Task({ task }) {
  console.log({ task });
  const dispatch = useDispatch();
  return (
    <div className="list">
      <div className="task-card">
        <p className={task.isDone?'done':null}>{task.text}</p>
        <button className={task.isDone?'gdone':'rdone'} onClick={() => dispatch(done(task.id))}>{task.isDone?'done':'undone'}</button>
        <button
          variant="outline-primary"
          onClick={() => dispatch(deleteT(task.id))}
        >
          Delete
        </button>
        <Edit task={task} />
      </div>
    </div>
  );
}

export default Task;
