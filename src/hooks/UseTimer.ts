import { useState, useEffect, useRef } from "react";
function useTimer(initialTime: number) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [timeFeld, setTimeFeld] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const timeRef = useRef<number | null>(null);

  function handleTimerChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value);
    setTimeFeld(value);
    setTimeLeft(value);
  }

  function startTime() {
    setIsRunning(true);
    timeLeft === 0 ? setTimeLeft(timeFeld) : setTimeLeft(timeLeft);
  }

  function pauseTime() {
    setIsRunning(false);
  }

  function resetTime() {
    setIsRunning(false);
    setTimeFeld(initialTime);
    setTimeLeft(initialTime);
  }

  useEffect(() => {
    if (!isRunning) return;
    timeRef.current = window.setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0.1) {
          return prevTime - 0.1;
        }
        setIsRunning(false);
        return 0;
      });
    }, 100);

    return () => {
      if (timeRef.current) {
        clearInterval(timeRef.current);
        timeRef.current = null;
      }
    };
  }, [isRunning]);

  return {
    timeLeft,
    handleTimerChange,
    startTime,
    pauseTime,
    resetTime,
    timeFeld,
  };
}

export default useTimer;
