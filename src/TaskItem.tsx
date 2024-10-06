import React, { ChangeEvent, useRef, useState } from 'react'
import todoClass from './Todolist.module.css'
import { TasksType } from './App'
import { Checkbox, IconButton, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { pink } from '@mui/material/colors'

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
      <Checkbox
        onChange={onChangeHandler}
        checked={props.isDone}
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
      {isChange ? (
        <TextField
          size="small"
          variant="standard"
          onBlur={handleBlurChangeName}
          onChange={handleChangeValue}
          ref={inputRef}
          type="text"
          value={textInput}
        />
      ) : (
        <span onDoubleClick={handleChangeTaskName} className={todoClass.changeSpan} title={'Can change'}>
          {props.title}
        </span>
      )}
      <IconButton
        onClick={() => {
          props.removeTask(props.taskId, props.id)
        }}
        aria-label="delete task">
        <DeleteIcon />
      </IconButton>
    </li>
  )
}
