import React from 'react';
import { Header } from './Header.jsx';
import { ToDoList } from './ToDoList.jsx';
import { NewToDo } from './NewToDo.jsx';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewToDo = this.handleNewToDo.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleRemoveToDo = this.handleRemoveToDo.bind(this);
    this.state = {
      todos: []
    };
  }
  handleNewToDo(todo_item) {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.concat(todo_item)
      }
    });
  }
  handleRemoveToDo(remove_item) {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter((item) => item != remove_item)
      };
    });
  }
  handleReset() {
    this.setState({
      todos: []
    })
  }
  render(){
    return (
      <div>
        <Header title="ToDo APP" description="A Simple ToDo App To Maintain Daily Tasks" />
        <ToDoList todos_list={this.state.todos} handleReset={this.handleReset} handleRemoveToDo={this.handleRemoveToDo}/>
        <NewToDo handleNewToDo={this.handleNewToDo}/>
      </div>
    );
  }
}

export { ToDo }
