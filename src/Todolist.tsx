import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { FilterValuesType, TasksType } from './App'
import todoClass from './Todolist.module.css'
import { TaskItem } from './TaskItem'
import { Button } from '@mui/material'

// export type TaskType = {
//     id: string
//     title: string
//     isDone: boolean
// }

type PropsType = {
  id: number
  title: string
  tasks: Array<TasksType>
  removeTask: (taskId: string, todolistId: number) => void
  changeFilter: (value: FilterValuesType, todolistId: number) => void
  addTask: (title: string, todolistId: number) => void
  changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void
  removeTodolist: (id: number) => void
  filter: FilterValuesType
  changeTaskName: (taskId: string, todolistId: number, newTaskName: string) => void
}

export function Todolist(props: PropsType) {
  let [title, setTitle] = useState('')
  let [error, setError] = useState<string | null>(null)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null)
    if (e.key === 'Enter') {
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

  const styleNothingTasks = {
    color: 'white',
    fontWeight: 'bold',
    padding: '30px',
  }

  return (
    <div>
      <h3 className={todoClass.titleTodo}>
        {props.title}
        <button
          onClick={() => {
            props.removeTodolist(props.id)
          }}>
          x
        </button>
      </h3>
      <div>
        <input value={title} onChange={onChangeHandler} onKeyUp={onKeyPressHandler} className={error ? 'error' : ''} />

        <button onClick={onAddTaskHandler}>+</button>
        {error && <div className="error-message">{error}</div>}
      </div>
      {props.tasks.length > 0 ? (
        <ul>
          {props.tasks.map((t) => (
            <TaskItem
              key={t.taskId}
              {...t}
              id={props.id}
              changeTaskStatus={props.changeTaskStatus}
              removeTask={props.removeTask}
              changeTaskName={props.changeTaskName}
            />
          ))}
        </ul>
      ) : (
        <div style={styleNothingTasks}>Тасок нет</div>
      )}
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
        <Button
          disableElevation
          variant={props.filter === 'completed' ? 'contained' : 'outlined'}
          onClick={() => props.changeFilter('completed', props.id)}>
          Completed
        </Button>
      </div>
      <p></p>
    </div>
  )
}
