import React, { useState } from "react";
import { FilterValuesType } from "../../App";
import { Button } from "../button/Button";
import styled from "styled-components";
import { Theme } from "../../styles/Theme.styled";

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
  date?: string;
};

export const Todolist = ({
  title,
  tasks,
  removeTask,
  changeFilter,
  date,
}: TodolistPropsType) => {
  let [num, setNum] = useState("1");
  const upCounter = () => {
    setNum((Number(num) + 1).toString());
  };

  const isTask =
    tasks.length !== 0 ? (
      <ul>
        {tasks.map((e) => {
          return (
            <li key={e.id}>
              <input type="checkbox" checked={e.isDone} />
              <span>{e.title}</span>
              <Button
                name="X"
                callBack={() => {
                  removeTask(e.id);
                }}
              />
            </li>
          );
        })}
      </ul>
    ) : (
      <div>Nothing</div>
    );

  return (
    <StyledTodo>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      {isTask}
      <div>
        <Button
          name="All"
          callBack={() => {
            changeFilter("all");
          }}
        />
        <Button
          name="Active"
          callBack={() => {
            changeFilter("active");
          }}
        />
        <Button
          name="Completed"
          callBack={() => {
            changeFilter("completed");
          }}
        />
        <Button name={num} callBack={upCounter} />
      </div>
      {date && <div>{date}</div>}
    </StyledTodo>
  );
};

const StyledTodo = styled.div`
  background-color: ${Theme.color.bgc};
  padding: 30px;
  border-radius: 30px;
  border: 1px solid ${Theme.color.border};
`;
