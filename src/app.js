import React from 'react';
import ReactDOM from 'react-dom';

const element = document.getElementById('react-area');

//const template = React.createElement('h1', null, 'Hello React World..');
const template = <h1>Hello World</h1>



ReactDOM.render(template, element);
