import { useState } from 'react';
import PrimaryButton from "./button/primary-button/index.jsx";
import SecondaryButton from "./button/secondary-button/index.jsx";

const Counter = ({ initialCount, minCount, maxCount }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > minCount) {
      setCount(count - 1);
    }
  };

  return (
    <section className="section">
      <div className="card">
        <h1 className="section-title">Counter</h1>
        <>Count: {count}</>
        <div className="mt-4 flex">
          <PrimaryButton className="mr-2" onClick={increment} disabled={count >= maxCount}>Increment</PrimaryButton>
          <SecondaryButton onClick={decrement} disabled={count <= minCount}>Decrement</SecondaryButton>
        </div>
      </div>
    </section>
  );
};

export default Counter;
