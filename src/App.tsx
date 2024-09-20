import React, { useState } from 'react'
import './App.css'
import { tasksPropsType, Todolist as Todo } from './components/todolist/Todolist'
import { v1 } from 'uuid'

export type FilterValuesType = 'all' | 'completed' | 'active'

function App() {
  const [tasks, setTasks] = useState<Array<tasksPropsType>>([
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
  ])

  const [filter, setFilter] = useState<FilterValuesType>('all')

  function sortTasks(sortDirection: boolean) {
    setTasks([
      ...tasks.sort((a, b) =>
        sortDirection ? Number(a.isDone) - Number(b.isDone) : Number(b.isDone) - Number(a.isDone)
      ),
    ])
  }

  function changeStatus(taskId: string) {
    const task = tasks.find((g) => g.id === taskId)
    task && (task.isDone = !task.isDone)
    setTasks([...tasks])
  }

  function removeTask(id: string) {
    setTasks([...tasks.filter((e) => e.id !== id)])
  }

  function addTask(taskTitle: string) {
    if (taskTitle.trim().length > 0) {
      setTasks([{ id: v1(), title: taskTitle.trim(), isDone: false }, ...tasks])
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

  return (
    <div className="App">
      <Todo
        date="10.09.2024"
        title="What to learn"
        tasks={tasksForTodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeStatus={changeStatus}
        filter={filter}
        sortTasks={sortTasks}
      />
    </div>
  )
}

export default App
