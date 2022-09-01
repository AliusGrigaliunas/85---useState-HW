import React from 'react';

type CountSectionProps = {
  count: number,
};

const CountSection: React.FC<CountSectionProps> = ({ count }) => (
  <div>{`Count: ${count}`}</div>
);

export default CountSection;
