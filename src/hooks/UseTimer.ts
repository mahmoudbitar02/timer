import { useState } from "react";
function useTimer(initialTime: number) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  const setTimer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setTimeLeft(Number.isNaN(value) ? 0 : value);
  };

  return {
    timeLeft,
    setTimer,
  };
}

export default useTimer;
