import React from 'react';
import { useHover } from './components/useHover';

function App() {

  const { ref, hovered } = useHover()

  return (
    <div className="App">
      <div ref={ref}>
        {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
      </div>
    </div>
  );
}

export default App;
