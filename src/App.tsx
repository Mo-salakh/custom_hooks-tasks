import React from 'react';

import { useHover } from './components/useHover';
import { FethcExample } from './components/fetchExpample';
import { ExampleLocalStorage } from './components/ExampleLocalStorage';
import { useToggle } from './custom_hooks/useToggle2';


function App() {

  const { ref, hovered } = useHover()
  const {state, toggle} = useToggle(['blue', 'orange', 'cyan', 'teal'])
  return (
    <div className="App">
      <div ref={ref}>
        {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
      </div>
      <button onClick={() => toggle()}>
        {state}
      </button>
      <FethcExample />
      <ExampleLocalStorage />
    </div>
  );
}

export default App;
