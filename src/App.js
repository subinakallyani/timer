import { useEffect, useRef, useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const refSeconds = useRef(0);
  const refMinutes = useRef(0);
  const refHours = useRef(0);

  useEffect(() => {
    refSeconds.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(refSeconds.current);
    };
  }, []);

  useEffect(() => {
    refMinutes.current = setInterval(() => {
      setMinutes((prevMinutes) => prevMinutes + 1);
    }, 60000);

    return () => {
      clearInterval(refMinutes.current);
    };
  }, []);

  useEffect(() => {
    refHours.current = setInterval(() => {
      setHours((prevHrs) => prevHrs + 1);
    }, 3600000);

    return () => {
      clearInterval(refHours.current);
    };
  }, []);

  function handleStart() {
    refSeconds.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    refMinutes.current = setInterval(() => {
      setMinutes((prevMinutes) => prevMinutes + 1);
    }, 60000);

    refHours.current = setInterval(() => {
      setHours((prevHrs) => prevHrs + 1);
    }, 3600000);
  }

  function handlePause() {
    clearInterval(refMinutes.current);
    clearInterval(refSeconds.current);
    clearInterval(refHours.current);
  }

  function handleReset() {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }

  return (
    <div>
      <h1>Timer</h1>

      <h2>
        Hour: {hours} : Minute: {minutes} : Second: {seconds}
      </h2>
      <span>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </span>
    </div>
  );
}

export default App;
