import React from 'react'

export const RedButton = ({handleClick}) => {
  return (
    <button onClick={() => handleClick()} className='red'>Rojo</button>
  )
}
