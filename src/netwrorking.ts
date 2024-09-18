import {v1} from "uuid";

export const Network = 1;

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

const result = todolist.filter((e) => e.isDone)

console.log(result)