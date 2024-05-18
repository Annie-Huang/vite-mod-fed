// import { useState } from 'react';
import './App.css';

// @ts-ignore
import Button from 'remoteApp/Button';

// You can change it to useStore because we "export default useCount;", you can call it any useXXX you like.
// @ts-ignore
import useStore from 'remoteApp/store';

function App() {
  // The <button> count (Text with 'count is') is different from <Button> (Text with 'Click me') because they are from different state.
  // const [count, setCount] = useState(0);

  // This force both <button> and <Button> use the same useCount hook defined in C:\react\vite-mod-fed\remote\src\store.ts
  // so the count value is consistent updated.
  // "Note01 - Each app can shared state between own App button and remote app Button.jpg"
  const [count, setCount] = useStore();

  return (
    <div className='App'>
      <h1>Host-2 Application</h1>
      <Button />
      <div className='card'>
        <button onClick={() => setCount((count: number) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
