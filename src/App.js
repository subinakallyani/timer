import { useEffect, useMemo, useRef, useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const refSeconds = useRef(0);

  function timeHandler() {
    refSeconds.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
  }

  useEffect(() => {
    timeHandler();
    return () => {
      clearInterval(refSeconds.current);
    };
  }, []);

  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((prevMinutes) => prevMinutes + 1);
    }
    if (minutes === 60) {
      setMinutes(0);
      setHours((prevHrs) => prevHrs + 1);
    }
    if (hours === 24) {
      setHours(0);
    }
  }, [seconds, minutes, hours]);

  function handleStart() {
    timeHandler();
  }
  function handlePause() {
    clearInterval(refSeconds.current);
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
  // const [number, setNumber] = useState(0);
  // const [count, setCount] = useState(0);

  // function cubeNum(num) {
  //   console.log("calculation done");
  //   return Math.pow(num, 3);
  // }
  // // const result = cubeNum();
  // const result = useMemo(() => cubeNum(number), [number]);
  // return (
  //   <div>
  //     <input
  //       type="number"
  //       value={number}
  //       onChange={(e) => {
  //         setNumber(e.target.value);
  //       }}
  //     />
  //     <h1>Cube of the number {result}</h1>
  //     <button onClick={() => setCount(count + 1)}>Increment Count</button>
  //     <h1>Count:{count}</h1>
  //   </div>
  // );
}

export default App;
