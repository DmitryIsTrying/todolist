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
};

export const Todolist = (props: TodolistPropsType) => {
  let [num, setNum] = useState("1");
  const upCounter = () => {
    setNum((Number(num) + 1).toString());
  };
  return (
    <StyledTodo>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      {props.tasks.length !== 0 ? (
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
      ) : (
        <div>Nothing</div>
      )}
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
        <Button name={num} callBack={upCounter} />
      </div>
    </StyledTodo>
  );
};

const StyledTodo = styled.div`
  background-color: ${Theme.color.bgc};
  padding: 30px;
  border-radius: 30px;
  border: 1px solid ${Theme.color.border};
`;
