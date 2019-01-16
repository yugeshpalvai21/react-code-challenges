import React from 'react';
import ReactDOM from 'react-dom';

const element = document.getElementById('react-area');

//const template = React.createElement('h1', null, 'Hello React World..');
let counter = 0;

const addOne = () => {
  counter += 1;
  render();
}
const minusOne = () => {
  counter -= 1;
  render();
}
const Reset = () => {
  counter = 0;
  render();
}

const render = () => {
  const template = (
    <div>
      <h1>Counter App</h1>
      <hr />
      <h2>Counter: <strong>{counter}</strong></h2>
      <button onClick={addOne}>AddOne</button>
      <button onClick={minusOne}>MinusOne</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
  ReactDOM.render(template, element);
}

render();
