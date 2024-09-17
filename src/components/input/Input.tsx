import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    newTaskTitle: string
    setNewTaskTitle: (name: string) => void
    callBack: () => void
}

export const Input = ({newTaskTitle, setNewTaskTitle, callBack}: InputPropsType) => {

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.shiftKey && e.key === 'Enter') {
            callBack()
            setNewTaskTitle('')
        }
    }

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    return (
        <input type={'text'} onChange={onNewTitleChangeHandler}
               onKeyUp={onKeyPressHandler}
               value={newTaskTitle}/>
    );
};