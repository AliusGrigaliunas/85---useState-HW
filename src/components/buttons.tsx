/* eslint-disable react/require-default-props */
import React from 'react';
import classes from './buttons.module.scss';

type ButtonsProps = {
  setCount: () => void,
  children?: React.ReactNode,
};

const Buttons: React.FC<ButtonsProps> = ({ children, setCount }) => (
  <button
    type="button"
    className={classes.buttons}
    onClick={setCount}
  >
    {children}
  </button>
);

export default Buttons;
