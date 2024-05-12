import { useState } from 'react';

import './Button.css';

const Button = () => {
  const [state, setState] = useState<number>(0);

  return (
    <div>
      <button className='shared-btn' onClick={() => setState((s) => s + 1)}>
        Click me: {state}
      </button>
    </div>
  );
};

export default Button;