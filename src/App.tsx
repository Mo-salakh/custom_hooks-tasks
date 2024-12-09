import React from 'react';

import { useHover } from './custom_hooks/useHover';
import { FethcExample } from './components/fetchExpample';
import { ExampleLocalStorage } from './components/ExampleLocalStorage';
import { useViewportSize } from './custom_hooks/useViewportSize';


function App() {

  const { ref, hovered } = useHover()
  const {width, height} = useViewportSize()

  return (
    <div className="App">
      <div ref={ref}>
        {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
      </div>
      <>
        Width: { width }, height: { height }
      </>
      <FethcExample />
      <ExampleLocalStorage />
    </div>
  );
}

export default App;
