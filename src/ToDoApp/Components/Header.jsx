import React from 'react';

const Header =  (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <h4>{props.description}</h4>
      </div>
    );
}

export { Header };
