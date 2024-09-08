import React from "react";

export type tasksPropsType = {
  id: number;
  title: string;
  isDone: boolean;
};

type TodolistPropsType = {
  title: string;
  tasks: Array<tasksPropsType>;
};

export const Todolist = (props: TodolistPropsType) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {props.tasks.map((e) => {
          return (
            <li>
              <input type="checkbox" checked={e.isDone} />
              <span>{e.title}</span>
              <button
                onClick={() => {
                  alert(e.id);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};
