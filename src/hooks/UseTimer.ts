import { useState, useEffect, useRef } from "react";
function useTimer(initialTime: number) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [timeInput, setTimeInput] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const timeRef = useRef<number | null>(null);

  function handleChangeValue(event: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value);
    setTimeInput(value);
    setTimeLeft(value);
  }

  const startTimer = () => {
    setIsRunning(true);
    timeLeft === 0 ? setTimeLeft(timeInput) : setTimeLeft(timeLeft);
  };

  useEffect(() => {
    console.log(isRunning);
    if (!isRunning) return;
    timeRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0.1) {
          return prev - 0.1;
        } else {
          if (timeRef.current === 0) clearInterval(timeRef.current);
          setIsRunning(false);
          return 0;
        }
      });
    }, 100);
    return () => {
      if (timeRef.current) clearInterval(timeRef.current);
      console.log(`clear ${timeRef.current}`);
    };
  }, [isRunning]);

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeInput(initialTime);
    setTimeLeft(initialTime);
  };

  return {
    timeLeft,
    timeInput,
    handleChangeValue,
    startTimer,
    pauseTimer,
    resetTimer,
  };
}

export default useTimer;
