import React from 'react'

export const Events = () => {
    function handleClick () {
        alert("you've clicked me.")
    }

  return (
    <button onClick = {handleClick}>
        Click me 
    </button>
  )
}
