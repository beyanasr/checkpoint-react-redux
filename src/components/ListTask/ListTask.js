import React from "react";
import { useSelector } from "react-redux";
import Task from "../Task/Task";
import {useState} from 'react'

function ListTask() {
  const listTasks = useSelector((state) => state.list);
  console.log({ listTasks });
  const [all, setAll] = useState(true);

  return (
    <div>
      <button onClick={() => setAll(!all)}>{all ? "ALL" : "DONE"}</button>
      <div className="items">
        <ul>
          {all
            ? listTasks.map((el) => <Task task={el} />)
            : listTasks
                .filter((el) => el.isDone == true)
                .map((el) => <Task task={el} />)}
        </ul>
      </div>
    </div>
  );
}

export default ListTask;
