import React from "react";
import CountUp, { useCountUp } from "react-countup";

function Countup() {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    duration: 5,
    end: 10000,
    startOnMount: false,
  });

  return (
    <div>
      <h2>Countup Component</h2>
      <div>
        <h1>{countUp}</h1>
        <button onClick={start}>Start</button>
        <button onClick={pauseResume}>Pause / Resume</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => update(2000)}>Update to 2000</button>
      </div>
      <h1>
        <CountUp end={200} />
      </h1>
      <h1>
        <CountUp end={200} duration={5} />
      </h1>
      <h1>
        <CountUp start={350} end={1000} />
      </h1>
    </div>
  );
}

export default Countup;
