import React, { useState } from 'react'

export const OnOff = () => {
  const arrState = useState(false)

  const isOn = arrState[0]
  const setIsOn = arrState[1]

  console.log('I am rendering')

  const onStyle = {
    height: '50px',
    width: '50px',
    backgroundColor: isOn ? 'green' : 'white',
    border: '2px solid black',
    cursor: isOn ? 'default' : 'pointer',
  }

  const offStyle = {
    height: '50px',
    width: '50px',
    backgroundColor: isOn ? 'white' : 'red',
    border: '2px solid black',
    cursor: isOn ? 'pointer' : 'default',
  }

  const changeBtn = {
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    backgroundColor: isOn ? 'green' : 'red',
    marginLeft: '5px',
    transition: '500ms ease',
    border: '2px solid black',
  }

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <div
        onClick={() => {
          setIsOn(true)
        }}
        style={onStyle}></div>
      <div
        onClick={() => {
          setIsOn(false)
        }}
        style={offStyle}></div>
      <div style={changeBtn}></div>
    </div>
  )
}
