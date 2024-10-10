/* eslint-disable react/prop-types */
import "./StopWatchDigitStyles.css";
import { numbers } from "./digitsMap";

const StopWatchDigit = ({ digit = "0" }) => {
  return (
    <div className={`stopwatchdigit`}>
      <div
        id="h1"
        className={`horizontal ${numbers[digit].includes(1) ? " bar" : ""}`}
      ></div>
      <div className="vertical-group">
        <div
          id="v11"
          className={`vertical ${numbers[digit].includes(2) ? " bar" : ""}`}
        ></div>
        <div
          id="v12"
          className={`vertical ${numbers[digit].includes(3) ? " bar" : ""}`}
        ></div>
      </div>
      <div
        id="h2"
        className={`horizontal ${numbers[digit].includes(4) ? " bar" : ""}`}
      ></div>
      <div className="vertical-group">
        <div
          id="v21"
          className={`vertical ${numbers[digit].includes(5) ? " bar" : ""}`}
        ></div>
        <div
          id="v22"
          className={`vertical ${numbers[digit].includes(6) ? " bar" : ""}`}
        ></div>
      </div>
      <div
        id="h3"
        className={`horizontal ${numbers[digit].includes(7) ? " bar" : ""}`}
      ></div>
    </div>
  );
};

export default StopWatchDigit;
