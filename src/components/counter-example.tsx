import React from 'react';
import Buttons from './buttons';

// const buttonStyle = {
//   fontSize: 40,
//   padding: '10px 20px',
//   cursor: 'pointer',
// };

const CounterExample = () => {
  const [count, setCount] = React.useState(0);

  const [step, setStep] = React.useState(3);

  return (
    <div style={{ fontSize: 50, textAlign: 'center', marginTop: '2rem' }}>
      <div>{`Count: ${count}`}</div>
      <input
        type="number"
        style={{ fontSize: 40, width: 140, textAlign: 'center' }}
        value={step}
        onChange={(e) => setStep(e.target.valueAsNumber)}
      />

      <div style={{
        display: 'flex', justifyContent: 'center', gap: 20, marginTop: '1rem',
      }}
      >
        <Buttons setCount={() => setCount(count - step)}>
          Mažinti
        </Buttons>
        <Buttons setCount={() => setCount(count + step)}>
          Didinti
        </Buttons>
      </div>
    </div>
  );
};

export default CounterExample;
