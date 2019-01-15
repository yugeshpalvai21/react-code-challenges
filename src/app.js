import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('h1', null, 'Hello React World..');
const element = document.getElementById('react-area');

ReactDOM.render(template, element);
