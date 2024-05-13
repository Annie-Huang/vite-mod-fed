// import { useState } from 'react';
import './App.css';

import Button from './Button.tsx';
import useCount from './store';

function App() {
  // const [count, setCount] = useState(0);
  const [count, setCount] = useCount();

  return (
    <div className='App'>
      <h1>Remote Application</h1>
      <Button />
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
