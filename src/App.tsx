import React, { useState } from 'react'
import './App.css'
import { tasksPropsType, Todolist as Todo } from './components/todolist/Todolist'
import { v1 } from 'uuid'
import { Network } from './netwrorking'

const test = Network

const todolist = [
  {
    id: '1',
    title: 'JS',
    isDone: true,
  },
  {
    id: '2',
    title: 'HTML&CSS',
    isDone: true,
  },
  {
    id: '3',
    title: 'React',
    isDone: false,
  },
]

export type FilterValuesType = 'all' | 'completed' | 'active'

function App() {
  const [tasks, setTasks] = useState<Array<tasksPropsType>>(todolist)

  const [filter, setFilter] = useState<FilterValuesType>('all')

  function removeTask(id: string) {
    setTasks([...tasks.filter((e) => e.id !== id)])
  }

  function addTask(taskTitle: string) {
    const noSpaceTaskTitle = taskTitle.trim()
    if (noSpaceTaskTitle.length > 0) {
      let newTask = { id: v1(), title: noSpaceTaskTitle, isDone: false }
      let newTasks = [newTask, ...tasks]
      setTasks(newTasks)
    }
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value)
  }

  let tasksForTodolist = tasks
  if (filter === 'completed') {
    tasksForTodolist = tasks.filter((t) => t.isDone)
  }
  if (filter === 'active') {
    tasksForTodolist = tasks.filter((t) => !t.isDone)
  }

  const [index, setIndex] = useState(0)

  function upIndex() {
    setIndex(index >= 5 ? 0 : index + 1)
  }

  return (
    <div className="App">
      <Todo
        date="10.09.2024"
        title="What to learn"
        tasks={tasksForTodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
      />
      <button style={{ height: '300px', width: '300px' }} onClick={upIndex}>
        {index}
      </button>
      {/*<Todolists/>*/}
      {/*<Todolist*/}
      {/*    title="What to learn"*/}
      {/*    tasks={tasksForTodolist}*/}
      {/*    removeTask={removeTask}*/}
      {/*    changeFilter={changeFilter}*/}
      {/*    addTask={addTask}*/}
      {/*/>*/}
      {/*<Todolist*/}
      {/*    title="What to read"*/}
      {/*    tasks={tasksForTodolist}*/}
      {/*    removeTask={removeTask}*/}
      {/*    changeFilter={changeFilter}*/}
      {/*    addTask={addTask}*/}
      {/*/>*/}
    </div>
  )
}

export default App
