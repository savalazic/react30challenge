import React from 'react';

const Key = ({ keyCode, button, sound }) => {
  return (
    <div data-key={keyCode} className="key">
      <kbd>{button}</kbd>
      <span className="sound">{sound}</span>
    </div>
  );
};

export default Key;