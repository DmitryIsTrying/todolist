import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { FilterValuesType, TasksType } from './App'
import todoClass from './Todolist.module.css'
import { TaskItem } from './TaskItem'
import { Button, IconButton, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded'

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
        <IconButton
          onClick={() => {
            props.removeTodolist(props.id)
          }}
          aria-label="delete todolist">
          <DeleteIcon />
        </IconButton>
      </h3>
      <div>
        <TextField
          label="Name for Todo"
          error={!!error}
          variant="outlined"
          size="small"
          value={title}
          onChange={onChangeHandler}
          onKeyUp={onKeyPressHandler}
          helperText={error}
        />
        <IconButton disabled={!!error} onClick={onAddTaskHandler}>
          {error ? (
            <PriorityHighRoundedIcon fontSize="inherit" color="error" />
          ) : (
            <AddRoundedIcon color="info" fontSize="medium" />
          )}
        </IconButton>
      </div>
      {props.tasks.length > 0 ? (
        <ul style={{ listStyle: 'none' }}>
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
        <Button
          size="small"
          color="secondary"
          disableElevation
          variant={props.filter === 'all' ? 'contained' : 'outlined'}
          onClick={() => props.changeFilter('all', props.id)}>
          All
        </Button>
        <Button
          size="small"
          color="secondary"
          disableElevation
          variant={props.filter === 'active' ? 'contained' : 'outlined'}
          onClick={() => props.changeFilter('active', props.id)}>
          Active
        </Button>
        <Button
          size="small"
          color="secondary"
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
