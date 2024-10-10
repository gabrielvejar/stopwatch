import "./StopWatch.css";
import useStopwatch from "../../hooks/useStopwatch";
import StopWatchDigit from "../StopWatchDigit/StopWatchDigit/StopWatchDigit";

const StopWatch = () => {
  const { time, parsedTime, running, toggle, reset } = useStopwatch();

  return (
    <>
      <div className="stopwatch">
        <div className="segment">
          <StopWatchDigit digit={parsedTime.hours.split("").at(0)} />
          <StopWatchDigit digit={parsedTime.hours.split("").at(1)} />
        </div>
        <p>:</p>
        <div className="segment">
          <StopWatchDigit digit={parsedTime.minutes.split("").at(0)} />
          <StopWatchDigit digit={parsedTime.minutes.split("").at(1)} />
        </div>
        <p>:</p>
        <div className="segment">
          <StopWatchDigit digit={parsedTime.seconds.split("").at(0)} />
          <StopWatchDigit digit={parsedTime.seconds.split("").at(1)} />
        </div>
        <p>.</p>
        <div className="segment">
          <StopWatchDigit digit={parsedTime.tenths.split("").at(0)} />
        </div>
      </div>
      <button onClick={toggle}>{running ? "Stop" : "Start"}</button>
      {time !== 0 && <button onClick={reset}>Reset</button>}
    </>
  );
};

export default StopWatch;
