
import React, { useState, useRef } from 'react';
import {BsPauseCircle, BsPlayCircle} from 'react-icons/bs'
import {BiStopwatch} from 'react-icons/bi'

const StopwatchWidget = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [milsec, setMilsec] = useState(0)
  const [sec, setSec] = useState(0)
  const [min, setMin] = useState(0)
  const [hr, setHr] = useState(0)
  const milsecref = useRef(0)
  const secref = useRef(0)
  const minref = useRef(0)
  const hrref = useRef(0)
  const intervalRef = useRef(null);
  const Icon = isRunning ? BsPauseCircle : BsPlayCircle

  const startStopwatch = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        // checking stops for mili seconds
        if(milsecref.current > 58) {
            milsecref.current = 0
            setMilsec(0)
            // checking stops for seconds
            if(secref.current > 58) {
                secref.current = 0
                setSec(0)
                // checking stops for minutes
                if(minref.current > 58) {
                    minref.current = 0
                    setMin(0)
                    // checking stops for hours
                    if(hrref.current >= 23) {
                        hrref.current = 0
                        setHr(0)
                        setHr(0)
                        resetStopwatch()
                    }else {
                        setHr(hrref.current += 1)
                    }
                }else {
                    setMin(minref.current += 1)
                }
            }else {
                setSec(secref.current += 1)
            }
        }else {
            setMilsec(milsecref.current += 1)
        }
      }, 1);
    }else {
        clearInterval(intervalRef.current);
    }
  };

  const stopStopwatch = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  };

  const resetStopwatch = () => {
    stopStopwatch();
    setMilsec(0)
    setSec(0)
    setMin(0)
    setHr(0)
    milsecref.current = 0
    secref.current = 0
    minref.current = 0
    hrref.current = 0
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>
       <div className='timers'>{`${hrref.current < 10 ? '0' : ''}${hr}: ${minref.current < 10 ? '0' : ''}${min}: ${secref.current < 10 ? '0' : ''}${sec}: ${milsecref.current < 10 ? '0' : ''}${milsec}`}</div>
       </div>
      <div>
        <div className='icons-container'>
            <Icon onClick={startStopwatch} className='played' />
            <BiStopwatch onClick={resetStopwatch} className='stops' />
        </div>
      </div>
    </div>
  );
};

export default StopwatchWidget;
