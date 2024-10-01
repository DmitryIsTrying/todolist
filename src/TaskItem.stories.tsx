import { TaskItem } from './TaskItem'
import { action } from '@storybook/addon-actions'

export default {
  title: 'TaskItem',
  component: TaskItem,
}

const handleRemoveTask = action('Remove task')
const handleChangeTaskName = action('Change Task name')
const handleChangeTaskStatus = action('Change Task Status')

export const TestComponent = () => {
  return (
    <TaskItem
      taskId={'idTask_1'}
      removeTask={handleRemoveTask}
      changeTaskName={handleChangeTaskName}
      changeTaskStatus={handleChangeTaskStatus}
      title={'React'}
      id={1}
      isDone={true}
    />
  )
}
