import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  const infoToggle = () => {
    setShowInfo(!showInfo);
  };
  return (
    <article className='question'>
      <header>
        <h4 onClick={infoToggle}>{title}</h4>
        <button className='btn' onClick={infoToggle}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p onClick={infoToggle}>{info}</p>}
    </article>
  );
};

export default Question;
