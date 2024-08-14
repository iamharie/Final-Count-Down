import { useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
    console.log("timerStarted became TRUE");
  }

  function handleStop() {
    clearTimeout(timer.current);
    console.log("handleStop executed");
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired ? "you lost" : ""}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"}
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running" : "Timer is idel"}
      </p>
    </section>
  );
}
