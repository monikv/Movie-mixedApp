import { createContext, useContext, useState, useEffect } from "react";

const CounterContext = createContext();

export const useCounter = () => useContext(CounterContext);

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  console.log("CounterProvider initialized with count:", count);

  return (
    <CounterContext.Provider value={{ count, increment, reset,decrement }}>
      {children}
    </CounterContext.Provider>
  );
};