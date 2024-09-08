import React, { useState } from "react";
import "./App.css";
import { tasksPropsType, Todolist } from "./components/todolist/Todolist";

export type FilterValuesType = "all" | "completed" | "active";
function App() {
  //   let initTasks2: Array<tasksPropsType> = [
  //     {
  //       id: 1,
  //       title: "JS documentation",
  //       isDone: false,
  //     },
  //     {
  //       id: 2,
  //       title: "React documentation",
  //       isDone: false,
  //     },
  //   ];

  let [tasks, setTasks] = useState<Array<tasksPropsType>>([
    {
      id: 1,
      title: "JS",
      isDone: true,
    },
    {
      id: 2,
      title: "HTML&CSS",
      isDone: true,
    },
    {
      id: 3,
      title: "React",
      isDone: false,
    },
  ]);

  let [filter, setFilter] = useState<FilterValuesType>("all");

  function removeTask(id: number) {
    tasks = tasks.filter((e) => e.id !== id);
    setTasks(tasks);
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }

  let tasksForTodolist = tasks;
  if (filter === "completed") {
    tasksForTodolist = tasks.filter((t) => t.isDone === true);
  }
  if (filter === "active") {
    tasksForTodolist = tasks.filter((t) => t.isDone === false);
  }

  return (
    <div className="App">
      <Todolist
        title="What to learn"
        tasks={tasksForTodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
      />
      {/* <Todolist
        title="What to read"
        tasks={initTasks2}
        removeTask={removeTask}
      /> */}
    </div>
  );
}

export default App;
