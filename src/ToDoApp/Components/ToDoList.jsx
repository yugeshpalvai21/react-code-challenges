import React from 'react';
import { ToDoItem } from './ToDoItem.jsx';

const ToDoList = (props) => {
  return (
    <div>
      <h2>List Of ToDo's:</h2>
      <ul>
        {props.todos_list.map((todo_item) => <ToDoItem handleRemoveToDo={props.handleRemoveToDo} key={todo_item} todo_item={todo_item} /> )}
      </ul>
      <button onClick={props.handleReset}>Reset ToDo List</button><br /><br />
    </div>
  );
}

export { ToDoList };
