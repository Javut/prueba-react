import React from 'react'

export const BlueBotton = ({handleClick}) => {
  return (
    <button onClick={() => handleClick("azul")}  className='blue'>Azul</button>
  )
}
