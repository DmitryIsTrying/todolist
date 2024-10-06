import React, { useState } from 'react'
import './App.css'
import { Todolist } from './Todolist'
import { v1 } from 'uuid'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Grid from '@mui/material/Grid2'
import { Paper } from '@mui/material'

type ObjectType = {
  title: string
  filter: FilterValuesType
  tasks: Array<TasksType>
}
export type TasksType = {
  taskId: string
  title: string
  isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
  const [todo, setTodo] = useState<Array<ObjectType>>([
    {
      title: 'What to learn',
      filter: 'all',
      tasks: [
        { taskId: v1(), title: 'HTML&CSS', isDone: true },
        { taskId: v1(), title: 'JS', isDone: true },
      ],
    },
    {
      title: 'What to do',
      filter: 'all',
      tasks: [
        { taskId: v1(), title: 'HTML&CSS2', isDone: true },
        { taskId: v1(), title: 'JS2', isDone: true },
      ],
    },
  ])

  function changeTaskName(taskId: string, todolistId: number, newTaskName: string) {
    setTodo(
      todo.map((todo, indexTodo) =>
        indexTodo === todolistId
          ? {
              ...todo,
              tasks: todo.tasks.map((task) =>
                task.taskId === taskId
                  ? {
                      ...task,
                      title: newTaskName,
                    }
                  : task
              ),
            }
          : todo
      )
    )
  }

  function removeTask(taskId: string, todolistId: number) {
    setTodo(
      todo.map((el, index) =>
        index === todolistId
          ? {
              ...el,
              tasks: [...el.tasks.filter((fl) => fl.taskId !== taskId)],
            }
          : el
      )
    )
  }

  function addTask(title: string, todolistId: number) {
    let newTask: TasksType = { taskId: v1(), title: title, isDone: false }
    setTodo(todo.map((el, index) => (index === todolistId ? { ...el, tasks: [newTask, ...el.tasks] } : el)))
  }

  function changeStatus(taskId: string, isDone: boolean, todolistId: number) {
    setTodo(
      todo.map((el, index) =>
        index === todolistId
          ? {
              ...el,
              tasks: el.tasks.map((m) => (m.taskId === taskId ? { ...m, isDone: isDone } : m)),
            }
          : el
      )
    )
  }

  function changeFilter(value: FilterValuesType, todolistId: number) {
    setTodo(todo.map((el, index) => (index === todolistId ? { ...el, filter: value } : el)))
  }

  function removeTodolist(todolistId: number) {
    setTodo(todo.filter((_, index) => index !== todolistId))
  }

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Your Todolist Items
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Grid style={{ padding: '50px' }} container spacing={15}>
        {todo.map((tl, index) => {
          let allTodolistTasks = tl.tasks
          let tasksForTodolist = allTodolistTasks

          if (tl.filter === 'active') {
            tasksForTodolist = allTodolistTasks.filter((t) => !t.isDone)
          }
          if (tl.filter === 'completed') {
            tasksForTodolist = allTodolistTasks.filter((t) => t.isDone)
          }
          //bad practice, we can delete todolist
          return (
            <Grid key={index} size={3}>
              <Paper elevation={21} style={{ padding: '20px' }} color={'yellow'}>
                <Todolist
                  id={index}
                  title={tl.title}
                  tasks={tasksForTodolist}
                  removeTask={removeTask}
                  changeFilter={changeFilter}
                  addTask={addTask}
                  changeTaskStatus={changeStatus}
                  filter={tl.filter}
                  removeTodolist={removeTodolist}
                  changeTaskName={changeTaskName}
                />
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default App
