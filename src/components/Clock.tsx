import React, { useEffect, useState } from "react";

interface ClockProps {
  index: number;
  data: { name: string; time: string };
  setClocks: (clocks: { name: string; time: string }[]) => void;
  clocks: { name: string; time: string }[];
}

const Clock: React.FC<ClockProps> = ({ index, data, setClocks, clocks }) => {
  const [clockFormat, setClockFormat] = useState('');
  const [intervalId, setIntervalId] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(updateClock, 300);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  const removeClock = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
    const newClocks = [...clocks];
    newClocks.splice(index, 1);
    setClocks(newClocks);
  };

  function updateClock() {
    const now = new Date();
    const londonHours = String(now.getUTCHours() + Number(data.time)).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');

    const clockFormat = `${londonHours}:${minutes}:${seconds}`;

    setClockFormat(clockFormat);
  }

  return (
    <>
      <div className='city'>{data.name}</div>
      <div className='clock'>{clockFormat}</div>
      <button onClick={removeClock}>Remove</button>
    </>
  );
}

export default Clock;
