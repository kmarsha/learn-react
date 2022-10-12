import React, {useState} from 'react';

function Toggle() {
  const [val, setVal] = useState('ON');

  function toggle() {
    setVal((val == 'ON') ? 'OFF' : 'ON');
  }

  return <button onClick={toggle}>{val}</button>;
}

export default Toggle;