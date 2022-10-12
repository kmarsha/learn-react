import React, {useState, useEffect} from 'react';

function Counter() {
  //hooks
  //can only be used inside functional components
  //functions that allow to 'hook into' React features from function component
  const [counter, setCounter] = useState(0);

  useEffect(() => { //hooks to able use lifecycle method
    alert("Number of clicks: " + counter);
  }, [counter]);

  function increment() {
    setCounter(counter+1);
  }

  return(
    <div>
      <p>Counting {counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter;