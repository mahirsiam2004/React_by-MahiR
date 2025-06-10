// import React from 'react';

// import { useState } from "react";

// const App = () => {
//   const [count, setcount] = useState(0);
//   const incriment = () => setcount(count + 1);
//   return (
//     <section>
//       <h1>{count}</h1>
//       <button onClick={incriment}>+</button>
//     </section>
//   );
// };


// export default App;
import React from 'react';

import { useState } from "react";

const App = () => {
  const [friends, setfriends] = useState(["Riyad","Shafayet"]);
  return (
    <section>
      {
        friends.map((f)=>(
          <li key={Math.random()}>{f}</li>
        ))
      }
    </section>
  );
};


export default App;