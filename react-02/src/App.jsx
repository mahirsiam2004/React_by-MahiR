import React from 'react';

import { useState } from "react";

const App = () => {
  const [count, setcount] = useState(0);
  const incriment = () => setcount(count + 1);
  return (
    <section>
      <h1>{count}</h1>
      <button onClick={incriment}>+</button>
    </section>
  );
};


export default App;
