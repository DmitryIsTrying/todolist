import React, {useState} from "react";
import "./App.css";
import {tasksPropsType, Todolist} from "./components/todolist/Todolist";
import {Button} from "./components/button/Button";

// Learn obj

// const reverseString = (str: string): string => str;
//
// console.log();

//

const todolists = [
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
const money = [
    {banknots: "Dollars", value: 100, number: " a1234567890"},
    {banknots: "Dollars", value: 50, number: " z1234567890"},
    {banknots: "RUBLS", value: 100, number: " w1234567890"},
    {banknots: "Dollars", value: 100, number: " e1234567890"},
    {banknots: "Dollars", value: 50, number: " c1234567890"},
    {banknots: "RUBLS", value: 100, number: " r1234567890"},
    {banknots: "Dollars", value: 50, number: " x1234567890"},
    {banknots: "RUBLS", value: 50, number: " v1234567890"},
];

export type FilterValuesType = "all" | "completed" | "active";

function App() {
    let [nameBtn, setnameBtn] = useState("All");

    let currentMoney = money;

    if (nameBtn === "RUBLS") {
        currentMoney = money.filter(
            (filteredMoney) => filteredMoney.banknots === "RUBLS"
        );
    }
    if (nameBtn === "Dollars") {
        currentMoney = money.filter(
            (filteredMoney) => filteredMoney.banknots === "Dollars"
        );
    }

    const onClickFilterHandler = (nameButton: string) => {
        setnameBtn(nameButton);
    };

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

    let [tasks, setTasks] = useState<Array<tasksPropsType>>(todolists);

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
            />
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
            <ul>
                {currentMoney.map((e) => {
                    return (
                        <li key={e.number}>
                            banknots: {e.banknots} nominal: {e.value} seria: {e.number}
                        </li>
                    );
                })}
            </ul>
            <Button
                name="All"
                callBack={() => {
                    onClickFilterHandler("All");
                }}
            />
            <Button
                name="Dollars"
                callBack={() => {
                    onClickFilterHandler("Dollars");
                }}
            />
            <Button
                name="RUBLS"
                callBack={() => {
                    onClickFilterHandler("RUBLS");
                }}
            />
        </div>
    );
}

export default App;
