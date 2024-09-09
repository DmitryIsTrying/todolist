import React from "react";
import { FilterValuesType } from "../../App";
import { Button } from "../button/Button";

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
            <li key={e.id}>
              <input type="checkbox" checked={e.isDone} />
              <span>{e.title}</span>
              <Button
                name="X"
                callBack={() => {
                  props.removeTask(e.id);
                }}
              />
            </li>
          );
        })}
      </ul>
      <div>
        <Button
          name="All"
          callBack={() => {
            props.changeFilter("all");
          }}
        />
        <Button
          name="Active"
          callBack={() => {
            props.changeFilter("active");
          }}
        />
        <Button
          name="Completed"
          callBack={() => {
            props.changeFilter("completed");
          }}
        />
      </div>
    </div>
  );
};
