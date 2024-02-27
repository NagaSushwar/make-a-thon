import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = "03/27/2024";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const ShiftingCountdown = () => {
  const intervalRef = useRef(null);

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM);

    const now = new Date();

    const distance = +end - +now;

    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <div style={{ padding: "0rem",width:"50%",margin:"2rem"}}>
      <div style={{ maxWidth: "100%", margin: "0 auto", display: "flex", alignItems: "center", background: "white" }}>
        <CountdownItem num={remaining.days} text="days" />
        <CountdownItem num={remaining.hours} text="hours" />
        <CountdownItem num={remaining.minutes} text="minutes" />
        <CountdownItem num={remaining.seconds} text="seconds" />
      </div>
    </div>
  );
};

const CountdownItem = ({ num, text }) => {
  return (
    <div style={{ fontFamily: "monospace", width: "100%", height: "5rem", display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "center", justifyContent: "center",border:"2px solid orange" }}>
      <div style={{ width: "100%", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <AnimatePresence mode='wait'>
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            style={{ display: "block", fontSize: "1.5rem", fontWeight: "500", color: "black" }}
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span style={{ fontSize: "0.75rem", fontWeight: "300", color: "#718096" }}>{text}</span>
    </div>
  );
};

export default ShiftingCountdown;
