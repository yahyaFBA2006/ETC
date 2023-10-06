import React from 'react';

const ScrollTo = ({ targetId }) => {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={handleClick} className="cursor-pointer">
     {targetId}
    </button>
  );
};

export default ScrollTo;
