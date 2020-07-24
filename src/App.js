import React, { useState } from 'react';
import Button from './components/Button';


function App() {
  const [count, setCount] = useState(0);

  const increaseValue = amount => {
    setCount(count + amount);
  }

  return (
    <div className="App">
      <Button increment={1} clickHandler={increaseValue}/>
      <Button increment={10} clickHandler={increaseValue}/>
      <Button increment={100} clickHandler={increaseValue}/>
      <Button increment={1000} clickHandler={increaseValue}/>
      <span>{count}</span>
    </div>
  );
}

export default App;
