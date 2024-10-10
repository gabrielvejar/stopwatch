import { useState, useEffect } from "react";

export default function useStopwatch() {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [parsedTime, setParsedTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
    tenths: "00",
  });

  const toggle = () => setRunning(!running);
  const reset = () => setTime(0);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const tenths = Math.floor((time % 1000) / 10);

    return {
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
      tenths: tenths.toString().padStart(2, "0"),
    };
  };

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 100);
      }, 100);
    } else if (!running && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, time]);

  useEffect(() => {
    setParsedTime(formatTime(time));
  }, [time]);

  return { time, running, toggle, reset, parsedTime };
}
