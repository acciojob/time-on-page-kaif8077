
import React, { useState, useEffect } from "react";
import './../styles/App.css';


const App = () => {
  const [count, setCount] = useState(0);
   useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => clearInterval(intervalId);
  }, [])
     
  
  return (
      <div>
        <p>You've  been on this page for {count} seconds</p>
      </div>
    )
  }

export default App
