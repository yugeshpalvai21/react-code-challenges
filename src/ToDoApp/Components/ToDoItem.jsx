import React from 'react';

const ToDoItem = (props) => {
  return (
    <li>
      {props.todo_item}
      <button onClick={() => props.handleRemoveToDo(props.todo_item)}>Remove Todo</button>
    </li>
  );
}

export { ToDoItem };
