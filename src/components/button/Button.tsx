import React from 'react'

type ButtonPropsType = {
  name: string
  callBack: () => void
  isActiveBtn?: boolean
}

export const Button = ({ name, callBack, isActiveBtn }: ButtonPropsType) => {
  return (
    <button className={isActiveBtn ? 'activeBtn' : ''} onClick={callBack}>
      {name}
    </button>
  )
}
