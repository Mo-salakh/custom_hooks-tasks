import React from 'react';

import { useHover } from './components/useHover';
import { FethcExample } from './components/fetchExpample';
import { ExampleLocalStorage } from './components/ExampleLocalStorage';


function App() {

  const { ref, hovered } = useHover()

  return (
    <div className="App">
      <div ref={ref}>
        {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
      </div>
      <FethcExample />
      <ExampleLocalStorage />
    </div>
  );
}

export default App;
