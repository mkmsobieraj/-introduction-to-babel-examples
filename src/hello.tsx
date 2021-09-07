import React, { FC, ReactElement } from 'react';
import ReactDOM from 'react-dom';

export type FCHello = FC<HelloTsProps>;

const HelloTs: FCHello = props =>
  <p>Hello {`Hello ${['World', ...props.all]}!`}</p>

export interface HelloTsProps {
  all: string[];
}

const helloTs: ReactElement = <HelloTs all={['Venus', 'Mars']} />

ReactDOM.render(
  helloTs,
  document.getElementById('root')
);


// uncomment to test typechecking
// const typeCheckTest: FCHello = "abc"
// console.log(typeCheckTest)