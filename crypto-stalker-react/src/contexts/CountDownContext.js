import { createContext, useContext, useState, useEffect } from "react";

export const CountdownContext = createContext();

export const CountdownProvider = ({ children }) => {
  const [countdown, setCountdown] = useState(120);
  const refreshRate = 120;

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prevCountdown) => prevCountdown - 1);
      } else {
        setCountdown(refreshRate);
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdown, refreshRate]);

  return (
    <CountdownContext.Provider value={{ countdown, setCountdown }}>
      {children}
    </CountdownContext.Provider>
  );
};

export const useCountdown = () => {
  const context = useContext(CountdownContext);
  if (!context) {
    throw new Error("useCountdown must be used within a CountdownProvider");
  }
  return context;
};
