// import { useState } from 'react';
import './App.css';

// @ts-ignore
import Button from 'remoteApp/Button';

// You can change it to useStore because we "export default useCount;", you can call it any useXXX you like.
// @ts-ignore
import useStore from 'remoteApp/store';

function ButtonWrapper() {
  const [count, setCount] = useStore();

  return (
    <div
      className='App'
      style={{ border: '2px solid green', borderRadius: '5px' }}
    >
      <h1>Host-2 ButtonWrapper</h1>
      <Button />
      <div className='card'>
        <button onClick={() => setCount((count: number) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default ButtonWrapper;
