import "./Timer.scss";
import useTimer from "../../hooks/UseTimer";
function Timer() {
  const { timeLeft, timeInput, handleChangeValue, startTimer, pauseTimer, resetTimer } = useTimer(0);

  return (
    <div className="timer">
      <h1 className="timer__title">Zeit festlegen</h1>
      <input className="timer__input" type="number" value={timeInput} onChange={handleChangeValue} placeholder="Sekunden" />
      <div>
        <h2 className="timer__time-left">
          Time left: <p className="timer__time-left-value">{timeLeft.toFixed(3)}s</p>
        </h2>
        <div className="timer__buttons">
          <button className="timer__button" onClick={startTimer}>
            Start
          </button>
          <button className="timer__button" onClick={pauseTimer}>
            Pause
          </button>
          <button className="timer__button" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
