import React, { useEffect, useState } from "react";
import "./countDown.css";

const CountDown = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [show, setShow] = useState(true);

  useEffect(() => {
    const countDownDate = new Date(2025, 1, 28, 23, 59, 59).getTime();
  
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
  
      if (distance < 0) {
        clearInterval(interval);
        setShow(false);
        return;
      }
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      setDays(days < 10 ? "0" + days : days.toString());
      setHours(hours < 10 ? "0" + hours : hours.toString());
      setMinutes(minutes < 10 ? "0" + minutes : minutes.toString());
      setSeconds(seconds < 10 ? "0" + seconds : seconds.toString());
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  
  if (!show) return <></>;

  return (
    <div
      id="countDown-container"
      className="px-6 py-10 sm:px-6 sm:py-8 h-auto max-w-screen-7xl mx-auto bg-black"
    >
      <h3
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2 }}
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-2xl lg:text-5xl pb-12 text-center text-white tracking-widest AstranovaHeroFont"
      >
        <span className="text-4xl lg:text-6xl text-teal-500">C</span>ounter
        Until The Big Event
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 place-content-center gap-20">
        <li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex flex-col items-center text-white AstranovaHeroFont"
        >
          <span className="text-7xl text-teal-500 tracking-widest">
            {days}
          </span>
          <div className="text-2xl tracking-wider">
            <span className="text-3xl text-teal-500">D</span>ays
          </div>
        </li>
        <li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex flex-col items-center text-white AstranovaHeroFont"
        >
          <span className="text-7xl text-teal-500 tracking-widest">
            {hours}
          </span>
          <div className="text-2xl tracking-wider">
            <span className="text-3xl text-teal-500">H</span>ours
          </div>
        </li>
        <li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex flex-col items-center text-white AstranovaHeroFont"
        >
          <span className="text-7xl text-teal-500 tracking-widest">
            {minutes}
          </span>
          <div className="text-2xl tracking-wider">
            <span className="text-3xl text-teal-500">M</span>inutes
          </div>
        </li>
        <li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex flex-col items-center text-white AstranovaHeroFont"
        >
          <span className="text-7xl text-teal-500 tracking-widest">
            {seconds}
          </span>
          <div className="text-2xl tracking-wider">
            <span className="text-3xl text-teal-500">S</span>econds
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CountDown;