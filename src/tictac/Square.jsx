import React, { useState } from 'react'
import "../styles.css"

function Square ({value, onSquareClick}) {
  return (
    <button className = "square" onClick = {onSquareClick}>{value}</button> 
  )
}  

export default Square