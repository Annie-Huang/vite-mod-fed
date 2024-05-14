import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

// @ts-ignore
import ButtonModule from 'remote/Button';
console.log(ButtonModule);

const Button = ButtonModule.default;
console.log(Button);

const App = () => (
  <div className='container'>
    <div>Name: wp-host</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Button />
  </div>
);
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
