import React from "react";
import { FilterValuesType } from "../../App";

export type tasksPropsType = {
  id: number;
  title: string;
  isDone: boolean;
};

type TodolistPropsType = {
  title: string;
  tasks: Array<tasksPropsType>;
  removeTask: (id: number) => void;
  changeFilter: (value: FilterValuesType) => void;
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
                  props.removeTask(e.id);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <button
          onClick={() => {
            props.changeFilter("all");
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            props.changeFilter("active");
          }}
        >
          Active
        </button>
        <button
          onClick={() => {
            props.changeFilter("completed");
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
