import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react'
import { FilterValuesType, TasksType } from './App'

// export type TaskType = {
//     id: string
//     title: string
//     isDone: boolean
// }

type PropsType = {
  id: number
  title: string
  tasks: Array<TasksType>
  students: Array<string>
  removeTask: (taskId: string, todolistId: number) => void
  changeFilter: (value: FilterValuesType, todolistId: number) => void
  addTask: (title: string, todolistId: number) => void
  changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void
  removeTodolist: (id: number) => void
  filter: FilterValuesType
}

export function Todolist(props: PropsType) {
  const inputRef = useRef(null)
  let [title, setTitle] = useState('')
  let [error, setError] = useState<string | null>(null)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null)
    if (e.charCode === 13) {
      if (title !== '') {
        setTitle('')
        props.addTask(title, props.id)
      } else {
        setError('Field should be set')
      }
    }
  }

  const onAddTaskHandler = () => {
    if (title !== '') {
      setTitle('')
      props.addTask(title, props.id)
    } else {
      setError('Field should be set')
    }
  }

  return (
    <div>
      <h3>
        {props.title}
        <button
          onClick={() => {
            props.removeTodolist(props.id)
          }}>
          x
        </button>
      </h3>
      <div>
        <input
          value={title}
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
          className={error ? 'error' : ''}
        />

        <button onClick={onAddTaskHandler}>+</button>
        <input ref={inputRef} />
        <button
          onClick={() => {
            console.log(inputRef)
          }}>
          +
        </button>
        {error && <div className="error-message">{error}</div>}
      </div>
      <ul>
        {props.tasks.map((t) => {
          const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            let newIsDoneValue = e.currentTarget.checked
            props.changeTaskStatus(t.taskId, newIsDoneValue, props.id)
          }

          return (
            <li key={t.taskId} className={t.isDone ? 'is-done' : ''}>
              <input type="checkbox" onChange={onChangeHandler} checked={t.isDone} />
              <span>{t.title}</span>
              <button
                onClick={() => {
                  props.removeTask(t.taskId, props.id)
                }}>
                x
              </button>
            </li>
          )
        })}
      </ul>
      <div>
        <button
          className={props.filter === 'all' ? 'active-filter' : ''}
          onClick={() => props.changeFilter('all', props.id)}>
          All
        </button>
        <button
          className={props.filter === 'active' ? 'active-filter' : ''}
          onClick={() => props.changeFilter('active', props.id)}>
          Active
        </button>
        <button
          className={props.filter === 'completed' ? 'active-filter' : ''}
          onClick={() => props.changeFilter('completed', props.id)}>
          Completed
        </button>
      </div>
      <p></p>
    </div>
  )
}
