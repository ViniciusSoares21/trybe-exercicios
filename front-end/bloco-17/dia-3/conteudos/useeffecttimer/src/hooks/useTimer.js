import { useEffect, useState } from 'react'

function useTimer() {
  const [timer, setTimer] = useState(1);
  const [randomNumber, setRandomNumber] = useState(1);
  const [isMultiple, setMultiple] = useState(false);
  
  const TimerInterval = 1000;
  const maxTimer = 10;
  const increaseTimerInterval = () => setTimer((prevState) => prevState + 1);

  const minRandom = 1;
  const maxRandom = 100;

  const handleRandomNumber = () => {
    const random = Math.round(
      Math.floor(Math.random() * maxRandom) + minRandom,
    );
    setRandomNumber(random)
  };

  const numberThree = 3;
  const numberFive = 5;

  const verifyMultiple = (random) => {
    if (random % numberThree === 0
        || random % numberFive === 0) {
      setMultiple(true);
    }
  };


  useEffect(() => {
    const timerId = setInterval(increaseTimerInterval, TimerInterval);
    return () => {
      clearInterval(timerId);
    }
  }, []);

  useEffect(() => {
    verifyMultiple(randomNumber);
  }, [randomNumber]);

  const resetBingo = 4;
  useEffect(() => {
    if (timer > maxTimer) {
      handleRandomNumber();
      setTimer(1);
    }
    if (timer > resetBingo) {
      setMultiple(false);
    }
  }, [timer, setTimer])


  return {timer, randomNumber, isMultiple};
}

export default useTimer