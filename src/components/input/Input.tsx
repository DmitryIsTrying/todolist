import React, { ChangeEvent, KeyboardEvent } from 'react'

type InputPropsType = {
  newTaskTitle: string
  setNewTaskTitle: (name: string) => void
  callBack: () => void
  error?: string | null
  setError: (newValue: string | null) => void
}

export const Input = ({ newTaskTitle, setNewTaskTitle, callBack, error, setError }: InputPropsType) => {
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null)
    if (e.key === 'Enter') {
      callBack()
      setNewTaskTitle('')
    }
  }

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value)
  }

  return (
    <input
      className={error ? 'error' : ''}
      type={'text'}
      onChange={onNewTitleChangeHandler}
      onKeyUp={onKeyPressHandler}
      value={newTaskTitle}
    />
  )
}
