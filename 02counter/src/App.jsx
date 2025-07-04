import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0);
  // let counter = 5; 

  const addValue = () => {
    if (count < 20){
      setCount(count + 1)
    }
    // count = count + 1;
    // setCount(count)
  }
  const removeValue = () =>{
    // 1, 0. -1 
    if (count > 0) {
      setCount(count - 1);
    }
  }
  const resetValue = () =>{
    count = 0; 
    setCount(count)
  }

  return (
   <>
    <h1>chai aur react</h1>
    <h2>counter value: {count}</h2>
    <button onClick={addValue}>Add value</button>
    <br/>
    <button onClick={removeValue}>remove value </button>
    <button onClick={resetValue}>reset value </button>

   </>
  )
}

export default App
