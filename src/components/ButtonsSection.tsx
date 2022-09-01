import React from 'react';
import Buttons from './buttons';
import classes from './ButtonsSection.module.scss';

type ButtonsSectionProps = {
  setCountMinus: () => void,
  setCountPlus: () => void,
};

const ButtonsSection: React.FC<ButtonsSectionProps> = ({ setCountMinus, setCountPlus }) => (
  <div className={classes.ButtonsSection}>
    <Buttons setCount={setCountMinus}>
      Mažinti
    </Buttons>
    <Buttons setCount={setCountPlus}>
      Didinti
    </Buttons>
  </div>
);

export default ButtonsSection;
