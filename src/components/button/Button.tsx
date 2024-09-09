import React from "react";

type ButtonPropsType = {
  name: string;
  callBack: () => void;
};

export const Button = (props: ButtonPropsType) => {
  function onClickHandler() {
    props.callBack();
  }
  return <button onClick={onClickHandler}>{props.name}</button>;
};
