import { useState } from "react";
function useTimer(initialTime: number) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setTimeLeft(Number.isNaN(value) ? 0 : value);
  };

  const startTime = () => {
    // Implementation for starting the timer
  };

  const pauseTime = () => {
    // Implementation for pausing the timer
  };

  const resetTime = () => {
    setTimeLeft(initialTime);
  };

  return {
    timeLeft,
    handleTimeChange,
    setTimeLeft,
    startTime,
    pauseTime,
    resetTime,
  };
}

export default useTimer;
