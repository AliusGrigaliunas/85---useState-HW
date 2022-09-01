import React, { useState } from 'react';
import ButtonsSection from './ButtonsSection';
import InputSection from './InputSection';
import classes from './counter-example.module.scss';
import CountSection from './CountSection';

const CounterExample: React.FC = () => {
  const [count, setCount] = useState(0);

  const [step, setStep] = useState(0);

  const CountSetters = {
    setCountMinus: () => setCount(count - step),
    setCountPlus: () => setCount(count + step),
  };

  return (
    <div className={classes.Counter}>
      <CountSection count={count} />
      <InputSection
        value={step}
        onChange={(event) => setStep(event.target.valueAsNumber)}
      />
      <ButtonsSection
        setCountMinus={CountSetters.setCountMinus}
        setCountPlus={CountSetters.setCountPlus}
      />
    </div>
  );
};

export default CounterExample;
