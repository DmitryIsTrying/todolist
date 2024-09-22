import React, { useEffect, useRef, useState } from 'react'
import { FilterValuesType } from '../../App'
import { Button } from '../button/Button'
import styled from 'styled-components'
import { Theme } from '../../styles/Theme.styled'
import { Input } from '../input/Input'
import autoAnimate from '@formkit/auto-animate'

export type tasksPropsType = {
  id: string
  title: string
  isDone: boolean
}

type TodolistPropsType = {
  title: string
  tasks?: Array<tasksPropsType>
  removeTask: (id: string) => void
  changeFilter: (value: FilterValuesType) => void
  addTask: (taskTitle: string) => void
  date?: string
  changeStatus: (taskId: string) => void
  filter: FilterValuesType
  sortTasks: (sortDirection: boolean) => void
}

export const Todolist = ({
  title = `default's name title`,
  tasks,
  removeTask,
  changeFilter,
  date,
  addTask,
  changeStatus,
  filter,
  sortTasks,
}: TodolistPropsType) => {
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const [error, setError] = useState<string | null>(null)

  const [isUpSortDirection, setisUpSortDirection] = useState(true)

  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  let isTask = <div>Сейчас здесь пусто :(</div>
  if (tasks?.length !== 0) {
    isTask = (
      <ul style={{ listStyle: 'none' }} ref={parent}>
        {tasks?.map((e) => {
          const removeTaskHandler = () => {
            removeTask(e.id)
          }
          const onChangeHandler = () => {
            changeStatus(e.id)
          }

          return (
            <li className={e.isDone ? 'completedTask' : ''} key={e.id}>
              <input id={e.id} onChange={onChangeHandler} type="checkbox" checked={e.isDone} />
              <span>{e.title}</span>
              <Button name="X" callBack={removeTaskHandler} />
            </li>
          )
        })}
      </ul>
    )
  }

  const addTaskHandler = () => {
    newTaskTitle.trim() ? addTask(newTaskTitle) : setError('Field must be set')
    setNewTaskTitle('')
  }

  const onAllClickHandler = () => changeFilter('all')
  const onActiveClickHandler = () => changeFilter('active')
  const onCompletedClickHandler = () => changeFilter('completed')
  const onSortTasksHandler = () => {
    sortTasks(isUpSortDirection)
    setisUpSortDirection(!isUpSortDirection)
  }

  return (
    <StyledTodo>
      <h3>{title}</h3>
      <div>
        <Input
          id={'addInputTask'}
          setError={setError}
          error={error}
          callBack={addTaskHandler}
          newTaskTitle={newTaskTitle}
          setNewTaskTitle={setNewTaskTitle}
        />
        <Button name={'+'} callBack={addTaskHandler} />
        {error && <div className={'error-message'}>{error}</div>}
      </div>
      {isTask}
      <div>
        <Button isActiveBtn={filter === 'all'} name="All" callBack={onAllClickHandler} />
        <Button isActiveBtn={filter === 'active'} name="Active" callBack={onActiveClickHandler} />
        <Button isActiveBtn={filter === 'completed'} name="Completed" callBack={onCompletedClickHandler} />
        {filter === 'all' && <Button name="Sort" callBack={onSortTasksHandler} />}
      </div>
      {date && <div>{date}</div>}
    </StyledTodo>
  )
}

Todolist.defaultProps = {
  title: 'What to test',
}

const StyledTodo = styled.div`
  background-color: ${Theme.color.bgc};
  padding: 30px;
  border-radius: 30px;
  border: 1px solid ${Theme.color.border};
`
