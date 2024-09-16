import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "../../App";
import {Button} from "../button/Button";
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";

export type tasksPropsType = {
    id: string;
    title: string;
    isDone: boolean;
};

type TodolistPropsType = {
    title: string;
    tasks?: Array<tasksPropsType>;
    removeTask: (id: string) => void;
    changeFilter: (value: FilterValuesType) => void;
    addTask: (taskTitle: string) => void
    date?: string;
};

export const Todolist = ({
                             title,
                             tasks,
                             removeTask,
                             changeFilter,
                             date,
                             addTask
                         }: TodolistPropsType) => {
    const [newTaskTitle, setNewTaskTitle] = useState("");

    let isTask = <div>Сейчас здесь пусто :(</div>;
    if (tasks?.length !== 0) {
        isTask = (
            <ul>
                {tasks?.map((e) => {
                    const removeTaskHandler = () => {
                        removeTask(e.id);
                    }
                    return (
                        <li key={e.id}>
                            <input type="checkbox" checked={e.isDone}/>
                            <span>{e.title}</span>
                            <Button
                                name="X"
                                callBack={removeTaskHandler}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.shiftKey && e.key === 'Enter') {
            addTask(newTaskTitle)
            setNewTaskTitle('')
        }
    }

    const addTaskHandler = () => {
        addTask(newTaskTitle)
        setNewTaskTitle('')
    }

    const onAllClickHandler = () => changeFilter("all");
    const onActiveClickHandler = () => changeFilter("active");
    const onCompletedClickHandler = () => changeFilter("completed");

    return (
        <StyledTodo>
            <h3>{title}</h3>
            <div>
                <input onChange={onNewTitleChangeHandler}
                       onKeyUp={onKeyPressHandler}
                       value={newTaskTitle}/>
                <Button name={'+'} callBack={addTaskHandler}/>
            </div>
            {isTask}
            <div>
                <Button
                    name="All"
                    callBack={onAllClickHandler}
                />
                <Button
                    name="Active"
                    callBack={onActiveClickHandler}
                />
                <Button
                    name="Completed"
                    callBack={onCompletedClickHandler}
                />
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
