import React from 'react';

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

export { NewToDo }
