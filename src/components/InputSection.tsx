import React from 'react';
import classes from './InputSection.module.scss';

type InputSectionProps = {
  value: number,
  onChange: (event:React.ChangeEvent<HTMLInputElement>) => void,
};

const InputSection: React.FC<InputSectionProps> = ({ value, onChange }) => (
  <input
    type="number"
    className={classes.InputSection}
    value={value}
    onChange={onChange}
  />
);

export default InputSection;
