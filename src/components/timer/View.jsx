import React, { useState, useEffect } from 'react';
import { getTimeFormated } from './helper';
import {
    ContainerStyles,
} from './View.styles.jsx';

const Timer = ({
    handleEndOfTimer,
    stopTimer,
    time,
}) => {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    let interval = null;

    if (seconds > 0 && !stopTimer) {
        interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else {
        if (seconds <= 0) {
            handleEndOfTimer();
        }
        clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [seconds, stopTimer]);

  return (
    <ContainerStyles seconds={seconds}>{getTimeFormated(seconds)}</ContainerStyles>
  );
};

export default Timer;