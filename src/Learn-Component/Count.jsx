import React from 'react'
import { useState } from 'react'

const Count = () => {
    const [count , setCount] = useState(0) // use state function.

    let handleClick = ()=> {
        setCount(count + 1)
    }
  return (
    <div>
        <h1>Counter that update separately.</h1>
        {count}<br></br>
        <button onClick = {handleClick}>Increment 1</button><br></br>
        <button onClick = {handleClick}>Increment 2</button>
    </div>
  )
}

export default Count