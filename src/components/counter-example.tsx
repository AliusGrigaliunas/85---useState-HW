import React from 'react';
import ButtonsSection from './ButtonsSection';
import InputSection from './InputSection';
import classes from './counter-example.module.scss';
import CountSection from './CountSection';

const CounterExample = () => {
  const [count, setCount] = React.useState(0);

  const [step, setStep] = React.useState(0);

  const setters = {
    setCountMinus: () => setCount(count - step),
    setCountPlus: () => setCount(count + step),
  };

  const { setCountMinus, setCountPlus } = setters;

  return (
    <div className={classes.Counter}>
      <CountSection count={count} />
      <InputSection
        value={step}
        onChange={(event) => setStep(event.target.valueAsNumber)}
      />
      <ButtonsSection setCountMinus={setCountMinus} setCountPlus={setCountPlus} />
    </div>
  );
};

export default CounterExample;
