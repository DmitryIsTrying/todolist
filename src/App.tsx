import React, {useState} from "react";
import "./App.css";
import {tasksPropsType, Todolist} from "./components/todolist/Todolist";
import {v1} from "uuid";


const todolist = [
    {
        id: v1(),
        title: "JS",
        isDone: true,
    },
    {
        id: v1(),
        title: "HTML&CSS",
        isDone: true,
    },
    {
        id: v1(),
        title: "React",
        isDone: false,
    },
];


export type FilterValuesType = "all" | "completed" | "active";

function App() {

    let [tasks, setTasks] = useState<Array<tasksPropsType>>(todolist);

    let [filter, setFilter] = useState<FilterValuesType>("all");

    function removeTask(id: string) {
        tasks = tasks.filter((e) => e.id !== id);
        setTasks(tasks);
    }

    function addTask(taskTitle: string) {
        const noSpaceTaskTitle = taskTitle.trim()
        if (noSpaceTaskTitle.length > 0) {
            let newTask = {id: v1(), title: noSpaceTaskTitle, isDone: false};
            let newTasks = [newTask, ...tasks];
            setTasks(newTasks);
        }
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let tasksForTodolist = tasks;
    if (filter === "completed") {
        tasksForTodolist = tasks.filter((t) => t.isDone);
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter((t) => !t.isDone);
    }

    return (
        <div className="App">
            <Todolist
                date="10.09.2024"
                title="What to learn"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
            />
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
    );
}

export default App;
