import React from "react";
import "./App.css";
import { tasksPropsType, Todolist } from "./components/todolist/Todolist";
import { title } from "process";

const tasks1: Array<tasksPropsType> = [
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
];

const tasks2: Array<tasksPropsType> = [
  {
    id: 1,
    title: "JS documentation",
    isDone: false,
  },
  {
    id: 2,
    title: "React documentation",
    isDone: false,
  },
];

function App() {
  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks1} />
      <Todolist title="What to read" tasks={tasks2} />
    </div>
  );
}

export default App;
