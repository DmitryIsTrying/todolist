import React, {Fragment} from 'react';

type StudentsPropsType = {
    students: string[]
}

export const Students = ({students}: StudentsPropsType) => {
    return (
        <div>
            {
                students.map((el, i) => {
                    return (
                        <Fragment key={i}> <span>{el}</span> <br/></Fragment>
                    )
                })
            }
        </div>
    );
};