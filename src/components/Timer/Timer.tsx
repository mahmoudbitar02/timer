import "./Timer.scss";
import useTimer from "../../hooks/UseTimer";
function Timer() {
  const { timeLeft, handleTimeChange, startTime, pauseTime, resetTime } = useTimer(0);

  return (
    <div className="timer">
      <h1 className="timer__title">Zeit festlegen</h1>
      <input className="timer__input" type="number" value={timeLeft} onChange={handleTimeChange} placeholder="Sekunden" />
      <div>
        <h2 className="timer__time-left">
          Time left: <p className="timer__time-left-value">{timeLeft.toFixed(3) ?? 0}s</p>
        </h2>
        <div className="timer__buttons">
          <button className="timer__button" onClick={startTime}>
            Start
          </button>
          <button className="timer__button" onClick={pauseTime}>
            Pause
          </button>
          <button className="timer__button" onClick={resetTime}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
