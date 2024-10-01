import React, { ChangeEvent, useRef, useState } from 'react'
import todoClass from './Todolist.module.css'
import { TasksType } from './App'

type TaskItemPropsType = TasksType & {
  id: number
  changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void
  removeTask: (taskId: string, todolistId: number) => void
  changeTaskName: (taskId: string, todolistId: number, newTaskName: string) => void
}

export const TaskItem = (props: TaskItemPropsType) => {
  const [isChange, setIsChange] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [textInput, setTextInput] = useState(props.title)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let newIsDoneValue = e.currentTarget.checked
    props.changeTaskStatus(props.taskId, newIsDoneValue, props.id)
  }
  const handleChangeTaskName = () => {
    setIsChange(true)
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus() // Фокусируемся на инпуте
      }
    }, 0)
  }

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.currentTarget.value)
  }

  const handleBlurChangeName = () => {
    // eslint-disable-next-line no-restricted-globals
    const userConfirmed = confirm('Confirm?')
    if (userConfirmed) {
      props.changeTaskName(props.taskId, props.id, textInput)
      setIsChange(false)
    }
  }

  return (
    <li className={props.isDone && !isChange ? 'is-done' : ''}>
      <input type="checkbox" onChange={onChangeHandler} checked={props.isDone} />
      {isChange ? (
        <input
          onBlur={handleBlurChangeName}
          onChange={handleChangeValue}
          ref={inputRef}
          type="text"
          value={textInput}
        />
      ) : (
        <span onClick={handleChangeTaskName} className={todoClass.changeSpan} title={'Can change'}>
          {props.title}
        </span>
      )}

      <button
        onClick={() => {
          props.removeTask(props.taskId, props.id)
        }}>
        x
      </button>
    </li>
  )
}
