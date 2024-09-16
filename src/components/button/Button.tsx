import React from "react";

type ButtonPropsType = {
    name: string;
    callBack: () => void;
};

export const Button = ({name, callBack}: ButtonPropsType) => {
    return <button onClick={callBack}>{name}</button>;
};
