import React, { useContext } from 'react';
import AppContext from '../context';

const StatusBar = () => {
  const { currentScore } = useContext(AppContext);
  return (
    <div>
      Current Score: {currentScore}
    </div>
  );
};

export default StatusBar;
