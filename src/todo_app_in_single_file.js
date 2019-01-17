import React from 'react';
import ReactDOM from 'react-dom';

const element = document.getElementById('react-area');

class Header extends React.Component {
    render(){
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h4>{this.props.description}</h4>
        </div>
      );
    }
}

class ToDoItem extends React.Component {
  render() {
      return (
        <li>{this.props.todo_item}</li>
      )
  }
}

class ToDoList extends React.Component {
    render() {
      return (
        <div>
          <h2>List Of ToDo's:</h2>
          <ul>
            {this.props.todos_list.map((todo_item) => <ToDoItem key={todo_item} todo_item={todo_item} /> )}
          </ul>
          <button onClick={this.props.handleReset}>Reset ToDo List</button><br /><br />
        </div>
      )
    }
}

class NewToDo extends React.Component {
  constructor(props) {
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit(e) {
    e.preventDefault();
    const item_value = e.target.todo_item.value.trim();
    e.target.todo_item.value = '';
    this.props.handleNewToDo(item_value);
  }
  render() {
    return (
      <div>
        <form name="newToDo" onSubmit={this.handleFormSubmit}>
          <input type="text" name="todo_item" placeholder="Please Write Your ToDo Here.." />
          <input type="submit" value="Add ToDo" />
        </form>
      </div>
    )
  }
}
class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewToDo = this.handleNewToDo.bind(this);
    this.handleReset = this.handleReset.bind(this);
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
  handleReset() {
    this.setState({
      todos: []
    })
  }
  render(){
    return (
      <div>
        <Header title="ToDo APP" description="A Simple ToDo App To Maintain Daily Tasks" />
        <ToDoList todos_list={this.state.todos} handleReset={this.handleReset}/>
        <NewToDo handleNewToDo={this.handleNewToDo}/>
      </div>
    );
  }
}

ReactDOM.render(<ToDo />, element);
