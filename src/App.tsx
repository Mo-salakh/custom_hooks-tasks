import React from 'react';

import { useHover } from './components/useHover';
import { FethcExample } from './components/fetchExpample';
import { ExampleLocalStorage } from './components/ExampleLocalStorage';
import { useWindowScroll } from './custom_hooks/useWindowScroll';


function App() {

  const { ref, hovered } = useHover()
  const {scroll, scrollTo} = useWindowScroll()
  return (
    <div className="App">
      <div ref={ref}>
        {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
      </div>
      <FethcExample />
      <ExampleLocalStorage />
      <div>
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
    </div>
  );
}

export default App;
