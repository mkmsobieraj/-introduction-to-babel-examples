import React, { FC, ReactElement } from 'react';
import ReactDOM from 'react-dom';

const HelloTs: FC<HelloTsProps> = props => 
  <p>Hello {`Hello ${['World', ...props.all]}!`}</p>

interface HelloTsProps {
  all: string[];
}

const helloTs: ReactElement = <HelloTs all={['Venus', 'Mars']}/>

ReactDOM.render(
  helloTs,
  document.getElementById('root')
);