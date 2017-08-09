import React from 'react';
// When using JSX, you must always import React event though
// you might not use the `React` object anywhere in your file, because
// JSX tags are converted to `React.createElement` method calls.

function Hello (props) {
  return (
    <h1>Hello, world!</h1>
  );
}

export default Hello;
