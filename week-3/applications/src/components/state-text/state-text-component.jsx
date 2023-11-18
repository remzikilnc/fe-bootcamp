import { useState } from 'react';
import PrimaryButton from "../button/primary-button/index.jsx";

const StateTextComponent = ({ placeholder }) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <section className="section">
      <div className="card">
          <h1 className="section-title">Text</h1>
          <input placeholder={placeholder} value={text} onChange={handleChange} />
          <p>You typed: {text}</p>
          <PrimaryButton onClick={() => setText('')} disabled={text.length <= 0}>Reset</PrimaryButton>
      </div>
    </section>
  );
};

export default StateTextComponent;
