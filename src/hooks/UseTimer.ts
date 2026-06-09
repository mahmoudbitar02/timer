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

  useEffect(() => {
    if (!isRunning) return;
    timeRef.current = window.setInterval(() => {
      console.log(timeRef);

      setTimeLeft((prevTime) => {
        if (prevTime > 0.1) {
          return prevTime - 0.1;
        } else {
          clearInterval(timeRef.current!);
          setIsRunning(false);
          return 0;
        }
      });
    }, 100);
    return () => {
      if (timeRef.current) {
        clearInterval(timeRef.current);
        timeRef.current = null;
      }
    };
  }, [isRunning]);

  function startTime() {
    setTimeLeft(timeFeld);
    setIsRunning(true);
  }

  return {
    timeLeft,
    handleTimerChange,
    startTime,
    timeFeld,
  };
}

export default useTimer;
